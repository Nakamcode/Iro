import PropType from "prop-types";
import { forwardRef } from "react";

/**
 * @typedef {import('react')} React
 * @type {React.ForwardRefExoticComponent<{ children: React.ReactNode; } & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>}
 */
const Button = forwardRef(function InnerButton(
	{ children, className, ...props },
	ref
) {
	return (
		<>
			<button
				ref={ref}
				className={`px-6 py-2 font-medium font-display text-white bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-800 active:bg-indigo-900 rounded transition-colors ${className}`}
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

Button.propTypes = {
	children: PropType.node,
	className: PropType.string,
};

Button.defaultProps = {
	className: "",
};

export default Button;
