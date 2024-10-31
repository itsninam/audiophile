import { Link } from "react-router-dom";

function ButtonLink({
  buttonClass,
  buttonLabel,
  linkTo,
}: {
  buttonClass: string;
  buttonLabel: string;
  linkTo: string;
}) {
  return (
    <Link to={linkTo} className={`btn ${buttonClass}`}>
      {buttonLabel}
    </Link>
  );
}

export default ButtonLink;
