"use client";

import { ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function LessonsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/lessons")) return null;

  return (
    <div className="mt-5 flex flex-col gap-2 pb-6 pr-2">
      {ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/lessons${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
