import React from "react";

function Button({
  buttonClass,
  buttonLabel,
}: {
  buttonClass: string;
  buttonLabel: string;
}) {
  return <button className={buttonClass}>{buttonLabel}</button>;
}

export default Button;
