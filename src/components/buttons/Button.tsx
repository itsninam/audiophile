import { MouseEventHandler, ReactNode } from "react";

function Button({
  buttonClass,
  buttonLabel,
  onHandleClick,
  children,
}: {
  buttonClass: string;
  buttonLabel?: string;
  onHandleClick?: MouseEventHandler | undefined;
  children?: ReactNode;
}) {
  return (
    <button className={buttonClass} onClick={onHandleClick}>
      {children || buttonLabel}
    </button>
  );
}

export default Button;
