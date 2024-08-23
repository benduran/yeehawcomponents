/**
 * Creates a well-formed CSS classname from a collection of conditional classname strings
 */
export function cx(...classList: Array<boolean | null | string | undefined>) {
  let out = '';

  for (const className of classList) {
    if (className && typeof className === 'string') out += ` ${className}`;
  }

  return out.trim();
}
