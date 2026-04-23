import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb({ separator = "/", className = "" }) {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      className={`
        w-full
        text-sm
        flex items-center flex-wrap gap-1
        text-ui-muted dark:text-gray-400
        ${className}
      `}
    >
      {/* HOME */}
      <Link to="/" className="hover:text-brand-primary transition-colors">
        Home
      </Link>

      {/* PATHS */}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={routeTo}>
            <span className="mx-1 text-ui-muted">{separator}</span>

            {isLast ? (
              <span className="text-gray-800 dark:text-darkbrand-text font-medium capitalize">
                {name.replace(/-/g, " ")}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="hover:text-brand-primary transition-colors capitalize"
              >
                {name.replace(/-/g, " ")}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
