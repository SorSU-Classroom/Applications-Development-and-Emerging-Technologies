import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import React from "react";

type WarningIconProps = Omit<React.ComponentProps<typeof Icon>, "icon">;

const WarningIcon = React.forwardRef<any, WarningIconProps>((props, ref) => {
  const { className, ...rest } = props;

  return <Icon icon={"fluent-color:warning-32"} className={cn("inline-flex h-6 w-6 text-warning", className)} {...rest} />;
});
WarningIcon.displayName = "WarningIcon";

export { WarningIcon };

