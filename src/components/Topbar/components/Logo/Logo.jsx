import { Link } from "react-router";

function Logo() {
  return (
    <div className="logo-box">
      <Link>
        <h3 className="branding-name text-primary-text font-kalameh-medium text-xl">
          نام تجاری
        </h3>
      </Link>
    </div>
  );
}

export default Logo;
