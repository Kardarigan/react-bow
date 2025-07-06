import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    if (pathnames.length) {
        return (
            <nav className="text-gray-400 bg-slate-50 py-2">
                <div
                    className="flex space-x-2 items-center py-5 para-lil"
                    title="شما اینجا هستید."
                >
                    <Link to="/" className="hover:underline  hover:text-slate-700 me-2">
                        خانه
                    </Link>

                    {pathnames.map((segment, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;


                        return (
                            <React.Fragment key={to}>
                                <span className="mx-2">
                                    |
                                </span>
                                {isLast ? (
                                    <span className="text-gray-600 line-clamp-1 text-ellipsis">
                                        {capitalizeFirstLetter(
                                            decodeURIComponent(segment).replaceAll("-", " ")
                                        )}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="hover:underline hover:text-slate-700 whitespace-nowrap"
                                    >
                                        {capitalizeFirstLetter(
                                            decodeURIComponent(segment).replaceAll("-", " ")
                                        )}
                                    </Link>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </nav>
        );
    }
};

export default Breadcrumb;