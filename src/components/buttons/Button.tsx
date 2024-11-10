import { MouseEventHandler, ReactNode } from "react";

function Button({
  buttonClass,
  buttonLabel,
  onHandleClick,
  children,
  isDisabled,
}: {
  buttonClass: string;
  buttonLabel?: string;
  onHandleClick?: MouseEventHandler | undefined;
  children?: ReactNode;
  isDisabled?: boolean;
}) {
  return (
    <button
      className={buttonClass}
      onClick={onHandleClick}
      disabled={isDisabled}
    >
      {children || buttonLabel}
    </button>
  );
}

export default Button;
