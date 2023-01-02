import PropType from "prop-types";
import { forwardRef } from "react";

/**
 * @typedef {import('react')} React
 * @type {React.ForwardRefExoticComponent<{ children: React.ReactNode; } & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>}
 */
const IconButton = forwardRef(function InnerButton(
	{ children, className, ...props },
	ref
) {
	return (
		<>
			<button
				ref={ref}
				className={`no_highlight p-3 rounded-full bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-10 focus:outline-none focus:bg-gray-500 focus:bg-opacity-10 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-30 dark:focus:ring-opacity-70 transition-colors ${className}`}
				{...props}
			>
				{children}
			</button>
			<style jsx>{`
				.no_highlight {
					-webkit-tap-highlight-color: transparent;
				}
			`}</style>
		</>
	);
});

IconButton.propTypes = {
	children: PropType.node,
	className: PropType.string,
};

IconButton.defaultProps = {
	className: "",
};

export default IconButton;
