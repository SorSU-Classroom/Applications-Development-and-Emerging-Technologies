import { getPreviousNext } from "@/lib/markdown";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export default function LessonPagination({ pathname }: { pathname: string }) {
  const res = getPreviousNext(pathname);

  return (
    <div className="grid flex-grow grid-cols-2 gap-3 py-7 sm:py-10">
      <div>
        {res.prev && (
          <Link href={`/lessons${res.prev.href}`} className="!no-underline">
            <Button
              color="mode"
              variant={"outline"}
              className={cn(
                "flex h-auto w-full flex-col !items-start border-foreground/20 !py-4 pl-3"
              )}
            >
              <span className="flex items-center text-xs text-muted-foreground">
                <ChevronLeftIcon className="mr-1 h-[1rem] w-[1rem]" />
                Previous
              </span>
              <span className="ml-1 mt-1 inline text-wrap text-left">
                {res.prev.title}
              </span>
            </Button>
          </Link>
        )}
      </div>
      <div>
        {res.next && (
          <Link href={`/lessons${res.next.href}`} className="!no-underline">
            <Button
              color="mode"
              variant={"outline"}
              className={cn(
                "flex h-auto w-full flex-col !items-end border-foreground/20 !py-4 pr-3"
              )}
            >
              <span className="flex items-center text-xs text-muted-foreground">
                Next
                <ChevronRightIcon className="ml-1 h-[1rem] w-[1rem]" />
              </span>
              <span className="mr-1 mt-1 inline text-wrap text-right">
                {res.next.title}
              </span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
