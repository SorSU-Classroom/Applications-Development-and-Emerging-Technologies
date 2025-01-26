import { EachRoute } from "@/lib/routes-config";
import Anchor from "./anchor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function SubLink({
  title,
  href,
  items,
  noLink,
  level,
  isSheet,
}: EachRoute & { level: number; isSheet: boolean }) {
  const path = usePathname();
  let isMatch = path === href;
  const [isOpen, setIsOpen] = useState(level == 0);

  useEffect(() => {
    if (path == href || path.includes(href)) setIsOpen(true);
  }, [href, path]);

  const Comp = (
    <Anchor
      activeClassName="text-primary dark:font-medium font-semibold"
      href={href}
    >
      {title}
    </Anchor>
  );

  const titleOrLink = !noLink ? (
    isSheet ? (
      <SheetClose asChild>{Comp}</SheetClose>
    ) : (
      Comp
    )
  ) : (
    <h4 className="w-full font-semibold sm:text-sm">{title}</h4>
  );

  if (!items) {
    return (
      <div
        className={cn(
          "flex w-full flex-col rounded-sm py-1.5 pl-2 pr-2 hover:bg-foreground/5",
          {
            "bg-primary/10 hover:bg-primary/10": isMatch,
          }
        )}
      >
        {titleOrLink}
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-1">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger
          className={cn(
            "w-full rounded-sm py-1.5 pl-2 pr-2 hover:bg-foreground/5",
            {
              "bg-primary/10 hover:bg-primary/10": isMatch,
            }
          )}
        >
          <div className="flex w-full cursor-pointer items-center justify-between">
            <span className="text-left">{titleOrLink}</span>
            <span>
              {!isOpen ? (
                <ChevronRight
                  className={cn(
                    "h-[1.25rem] w-[1.25rem] rounded-sm p-0.5 hover:bg-foreground/5",
                    {
                      "text-primary hover:bg-primary/10": isMatch,
                    }
                  )}
                />
              ) : (
                <ChevronDown
                  className={cn(
                    "h-[1.25rem] w-[1.25rem] rounded-sm p-0.5 hover:bg-foreground/5",
                    {
                      "text-primary hover:bg-primary/10": isMatch,
                    }
                  )}
                />
              )}
            </span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div
            className={cn(
              "ml-0.5 mt-1 flex flex-col items-start gap-1 text-stone-800 dark:text-stone-300/85 sm:text-sm",
              "ml-1.5 border-l pl-4"
            )}
          >
            {items?.map((innerLink) => {
              const modifiedItems = {
                ...innerLink,
                href: `${href + innerLink.href}`,
                level: level + 1,
                isSheet,
              };
              return <SubLink key={modifiedItems.href} {...modifiedItems} />;
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
