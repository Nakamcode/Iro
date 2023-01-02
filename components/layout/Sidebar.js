import PropTypes from "prop-types";
import Link from "next/link";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import IconButton from "../core/IconButton";
import { navigation } from "#/navigation";
import { useRouter } from "next/router";

const Sidebar = ({ handleClose, open }) => {
	const { pathname } = useRouter();
	const hideSidebar = (event) => {
		!open && event.currentTarget.classList.add("invisible");
	};

	return createPortal(
		<FocusTrap active={open}>
			<aside
				id="sidenav"
				onTransitionEnd={hideSidebar}
				aria-label="Navigation Menu"
				className={`fixed top-0 left-0 h-screen w-full bg-indigo-500 z-50 pt-32 transform transition-transform duration-300 shadow-2xl ${
					open ? "visible translate-x-0" : "-translate-x-full"
				}`}
			>
				<IconButton
					aria-label="close side navbar"
					className="absolute right-4 top-3"
					onClick={handleClose}
				>
					<XMarkIcon className="w-6 h-6" />
				</IconButton>
				<ul className="space-y-8 flex flex-col ml-8">
					{Object.entries(navigation).map(([label, path]) => (
						<li key={label}>
							<Link
								href={path}
								onClick={handleClose}
								className={
									(pathname === path ? "!text-yellow-400 " : "") +
									"w-full block text-2xl text-white active:text-purple-100 focus:text-purple-300 font-headline font-semibold transition-colors"
								}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</aside>
		</FocusTrap>,
		document.querySelector("#__next")
	);
};

Sidebar.prototype = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default Sidebar;
