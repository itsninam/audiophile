import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <h1>
      <NavLink to="/">
        <img
          src="/starter-code/assets/shared/desktop/logo.svg"
          alt="audiophile"
        />
        <span className="sr-only">audiophile</span>
      </NavLink>
    </h1>
  );
}

export default Logo;
