import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const routeTitles = {
  "/": "Home",
  "/carts": "Your Cart",
  "/register": "Register",
  "/login": "Login",
  "/product/:id": "Product Details",
  "/product": "Products",
  "/product/category/:category": "Category Products",
};

const HelmetTitle = ({ defaultTitle = "My Website" }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getTitle = (path) => {
    // Handling dynamic segments like "/product/:id"
    for (const route in routeTitles) {
      const routeRegex = new RegExp(`^${route.replace(/:[^\s/]+/g, "[^/]+")}$`);
      if (routeRegex.test(path)) {
        return routeTitles[gi];
      }
    }
    return defaultTitle;
  };

  const pageTitle = getTitle(currentPath);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Helmet>
      {/* implement Letter dynamic website name */}
      <title>{pageTitle}</title>
    </Helmet>
  );
};

HelmetTitle.propTypes = {
  defaultTitle: PropTypes.string,
};

export default HelmetTitle;
