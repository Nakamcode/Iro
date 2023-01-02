import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { navigation } from "../../common/navigation";
import IconButton from "../core/IconButton";

const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

const Header = () => {
	const { pathname } = useRouter();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const openSidebar = () => setIsSidebarOpen(true);
	const closeSidebar = () => setIsSidebarOpen(false);

	return (
		<header className="sticky top-0 bg-indigo-700 px-2 md:px-12 lg:px-24 py-5 flex items-center justify-between z-30 shadow-sm shadow-indigo-900">
			<div className="flex space-x-2 items-center">
				<IconButton onClick={openSidebar} className="sm:hidden">
					<Bars3Icon className="w-5 h-5 text-white" />
				</IconButton>
				<Link href="/">
					<div className="flex items-center space-x-2">
						<Image src="/logo.png" alt="logo" width={30} height={30} />
						<span className="text-white text-4xl font-bold font-display">
							Iro
						</span>
					</div>
				</Link>
			</div>
			<nav className="hidden sm:block">
				<ul className="flex space-x-10">
					{Object.entries(navigation).map(([label, path]) => (
						<li key={label}>
							<Link
								href={path}
								className={
									"text-white font-body" +
									(pathname === path ? " text-yellow-500" : "")
								}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<Sidebar open={isSidebarOpen} handleClose={closeSidebar} />
		</header>
	);
};

export default Header;
