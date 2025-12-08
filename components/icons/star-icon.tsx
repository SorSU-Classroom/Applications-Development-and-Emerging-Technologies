import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import React from "react";

type StarIconProps = Omit<React.ComponentProps<typeof Icon>, "icon">;

const StarIcon = React.forwardRef<any, StarIconProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <Icon
      icon={"fluent-color:star-32"}
      className={cn("inline-flex h-4 w-4 text-success", className)}
      {...rest}
    />
  );
});
StarIcon.displayName = "StarIcon";

export { StarIcon };

