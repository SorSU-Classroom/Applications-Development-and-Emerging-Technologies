import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import React from "react";

type CheckIconProps = Omit<React.ComponentProps<typeof Icon>, "icon">;

const CheckIcon = React.forwardRef<any, CheckIconProps>((props, ref) => {
  const { className, ...rest } = props;

  return <Icon icon={"fluent-color:checkmark-circle-32"} className={cn("inline-flex h-6 w-6 text-success", className)} {...rest} />;
});
CheckIcon.displayName = "CheckIcon";

export { CheckIcon };

