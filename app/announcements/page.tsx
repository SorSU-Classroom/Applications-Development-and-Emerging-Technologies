import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AnnouncementMdxFrontmatter,
  Author,
  getAllAnnouncements,
} from "@/lib/markdown";
import { formatDate2, stringToDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CS 321 - Announcements",
};

export default async function AnnouncementsIndexPage() {
  const announcements = (await getAllAnnouncements()).sort(
    (a, b) => stringToDate(b.date).getTime() - stringToDate(a.date).getTime()
  );
  return (
    <div className="mx-auto flex min-h-[88vh] w-full flex-col gap-1 pt-2 sm:min-h-[91vh]">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold">
          The latest announcements for this course
        </h1>
        <p className="text-muted-foreground">
          All the latest announcements and news, straight from the instructor.
        </p>
      </div>
      <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
        {announcements.map((announcement) => (
          <AnnouncementCard
            {...announcement}
            slug={announcement.slug}
            key={announcement.slug}
          />
        ))}
      </div>
    </div>
  );
}

function AnnouncementCard({
  date,
  title,
  description,
  slug,
  cover,
  authors,
}: AnnouncementMdxFrontmatter & { slug: string }) {
  return (
    <Link
      href={`/announcements/${slug}`}
      className="flex min-h-[400px] flex-col items-start gap-2 rounded-md border px-3 py-5"
    >
      <h3 className="text-md -mt-1 pr-7 font-semibold">{title}</h3>
      <div className="w-full">
        <Image
          src={cover}
          alt={title}
          width={400}
          height={150}
          quality={80}
          className="h-[180px] w-full rounded-md border object-cover"
        />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="mt-auto flex w-full items-center justify-between">
        <p className="text-[13px] text-muted-foreground">
          Published on {formatDate2(date)}
        </p>
        <AvatarGroup users={authors} />
      </div>
    </Link>
  );
}

function AvatarGroup({ users, max = 4 }: { users: Author[]; max?: number }) {
  const displayUsers = users.slice(0, max);
  const remainingUsers = Math.max(users.length - max, 0);

  return (
    <div className="flex items-center">
      {displayUsers.map((user, index) => (
        <Avatar
          key={user.username}
          className={`inline-block h-9 w-9 border-2 border-background ${index !== 0 ? "-ml-3" : ""} `}
        >
          <AvatarImage src={user.avatar} alt={user.username} />
          <AvatarFallback>
            {user.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}
      {remainingUsers > 0 && (
        <Avatar className="-ml-3 inline-block border-2 border-background transition-transform hover:translate-y-1">
          <AvatarFallback>+{remainingUsers}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
