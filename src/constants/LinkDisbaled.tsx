import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ComponentProps, ComponentPropsWithoutRef } from "react";

type PaginationButtonProps =
  | (ComponentProps<typeof Link> & { disabled?: false })
  | (ComponentPropsWithoutRef<"button"> & { disabled: true });

export function PaginationButton(props: PaginationButtonProps) {
  if (props.disabled) {
    const { disabled, ...rest } = props;
    return (
      <Button variant="ghost" disabled={disabled} asChild>
        <button {...rest} />
      </Button>
    );
  }

  return (
    <Button variant="ghost" asChild>
      <Link {...props} />
    </Button>
  );
}
