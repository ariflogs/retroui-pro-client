"use client";

import { cn } from "@/lib/utils";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React, { ComponentPropsWithoutRef } from "react";

const Menu = DropdownMenu.Root;
const Trigger = DropdownMenu.Trigger;

interface IMenuContent
  extends ComponentPropsWithoutRef<typeof DropdownMenu.Content> {}

const Content = ({ className, ...props }: IMenuContent) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content
      side="bottom"
      align="start"
      className={cn(
        "bg-white border-2 shadow-md absolute top-2 min-w-20",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenu.Portal>
);

const MenuItem = React.forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DropdownMenu.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenu.Item
    ref={ref}
    className={cn(
      "relative text-black flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors hover:bg-primary focus:bg-primary data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
MenuItem.displayName = "MenuItem";

const MenuComponent = Object.assign(Menu, {
  Trigger,
  Content,
  Item: MenuItem,
});

export { MenuComponent as Menu };
