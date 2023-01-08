import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Widget } from "@typeform/embed-react";
const Layout = ({ children }) => {
	return (
		<div className="max-w-[2000px] mx-auto">
			<Widget
				id="rXv5FPQf"
				style={{ width: "50%" }}
				className="my-form hidden"
			/>
			<Header />
			<div className="relative top-[80px] lg:top-14">{children}</div>
			<Footer />
		</div>
	);
};
export default Layout;
