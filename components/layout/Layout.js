import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="relative top-[80px] lg:top-14">{children}</div>
			<Footer />
		</>
	);
};
export default Layout;
