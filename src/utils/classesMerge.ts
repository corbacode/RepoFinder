/**
 * Combines base and addition strings into a single class string.
 *
 * @param {string} base - The base class string.
 * @param {string | null} addition - The additional class string (optional).
 * @returns {string} - The combined class string.
 */
export default function cm(base: string, addition: string | null) {
  return addition ? [base, addition].join(" ") : [base].join(" ");
}
