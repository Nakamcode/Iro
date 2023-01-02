/**
 * Convert small cased text to capitalised case
 * @example
 * capitalize('text') // Text
 *
 * @param {string} text
 */
export const capitalize = (text) => {
	return text.charAt(0).toUpperCase() + text.substring(1);
};
