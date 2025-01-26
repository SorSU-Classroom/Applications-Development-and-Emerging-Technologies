"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, NavMenu } from "./navbar";
import { Button } from "./ui/button";
import { AlignLeftIcon } from "lucide-react";
import { FooterButtons } from "./footer";
import { DialogTitle } from "./ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import LessonsMenu from "./lessons-menu";
import { usePathname } from "next/navigation";
import DocsMenu from "./docs-menu";

const menuPaths = [
  {
    path: "/docs",
    menu: DocsMenu,
  },
  {
    path: "/lessons",
    menu: LessonsMenu,
  },
];

export function Leftbar() {
  const pathname = usePathname();

  const renderMenu = () => {
    for (const { path, menu } of menuPaths) {
      if (pathname.startsWith(path)) {
        const Menu = menu;

        return <Menu />;
      }
    }
  };

  return (
    <aside className="sticky top-16 hidden h-[93.75vh] min-w-[238px] flex-[1.5] flex-col overflow-y-auto md:flex">
      <ScrollArea className="py-4">{renderMenu()}</ScrollArea>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex md:hidden">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-2 overflow-y-auto">
          <div className="mx-2 mt-3 flex flex-col gap-2 px-5">
            <NavMenu isSheet />
            <hr className="mt-2 border-border" />
          </div>
          <div className="mx-2 -mt-4 pl-5 pr-3">
            <LessonsMenu isSheet />
          </div>
          <div className="flex gap-2.5 p-6 pb-4">
            <FooterButtons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
