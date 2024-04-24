export default function cm(base: string, addition: string | null) {
  const cls = addition ? [base, addition] : [base];
  return cls.join(" ");
}
