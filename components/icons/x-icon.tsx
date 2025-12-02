import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import React from "react";

type XIconProps = Omit<React.ComponentProps<typeof Icon>, "icon">;

const XIcon = React.forwardRef<any, XIconProps>((props, ref) => {
  const { className, ...rest } = props;

  return <Icon icon={"fluent-color:dismiss-circle-32"} className={cn("inline-flex h-6 w-6 text-destructive", className)} {...rest} />;
});
XIcon.displayName = "XIcon";

export { XIcon };

