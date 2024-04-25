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
