/**
 * Creates a new JSX element with optional base class and specified HTML element.
 *
 * @param {any} opt - The options object containing props for the element.
 * @param {string | undefined} baseClass - The base class string (optional).
 * @param {string} Element - The HTML element type (default: "div").
 * @returns {JSX.Element} - The created JSX element.
 */
export function createElement(
  opt: any,
  baseClass?: string,
  Element: string = "div"
): JSX.Element {
  const { className, ...props } = opt;
  return (
    <Element className={[baseClass, className].join(" ").trim()} {...props} />
  );
}
