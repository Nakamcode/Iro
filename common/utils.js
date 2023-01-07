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

/**
 * Truncate long texts
 * @example
 * truncate('Hey, I really understood your codes') // Hey, I really...
 *
 * @param {string} text
 * @param {number} num
 */

export const truncate = (text, num) => {
	if (text && text.length <= num) {
		return text;
	}
	return text.slice(0, num) + "...";
};
