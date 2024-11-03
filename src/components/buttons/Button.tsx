import { MouseEventHandler } from "react";

function Button({
  buttonClass,
  buttonLabel,
  onHandleClick,
}: {
  buttonClass: string;
  buttonLabel: string;
  onHandleClick?: MouseEventHandler | undefined;
}) {
  return (
    <button className={buttonClass} onClick={onHandleClick}>
      {buttonLabel}
    </button>
  );
}

export default Button;
