import { Link, useLocation } from "react-router-dom";
const Breadcrumb = () => {
    const { pathname } = useLocation();
    const pathnames = pathname.split("/").filter(pathname => pathname);
    let breadcrumbPath = '';
    return (

        <div className="text-sm breadcrumbs">

            {
                pathnames.length > 0 && <Link to='/'>Home </Link>
            }
            {
                pathnames.map((name, idx) => {
                    breadcrumbPath += `/${name}`;
                    const isLast = idx === pathnames.length - 1;
                    return isLast ? <span key={idx}>/ {name}</span> : (
                        <span>/ <Link to={breadcrumbPath}>{name} </Link></span>
                    )
                })
            }


        </div>
    );
};

export default Breadcrumb;