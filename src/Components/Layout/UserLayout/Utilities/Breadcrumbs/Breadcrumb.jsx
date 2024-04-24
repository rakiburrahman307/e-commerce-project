import { Link, useLocation } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(pathname => pathname);
  let breadcrumbPath = "";
  const { textColor } = useContextInfo();

  return (
    <div className='text-sm breadcrumbs'>
      {pathnames.length > 0 && (
        <Link to='/' className={`${textColor}`}>
          Home
        </Link>
      )}
      {pathnames.map((name, idx) => {
        breadcrumbPath += `/${name}`;
        const isLast = idx === pathnames.length - 1;
        return isLast ? (
          <span key={`Breadcrumb-${idx}`}>/ {name}</span>
        ) : (
          <span className={`${textColor}`} key={`Breadcrumb-${idx}`}>
            / <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
