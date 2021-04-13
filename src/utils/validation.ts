export default function parsing(key: string, value: unknown) {
  if (
    typeof value === 'string' &&
    /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)
  ) {
    return new Date(value);
  }
  return value;
}
