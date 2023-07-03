export const capitalizeString = (string?: string) => {
    if (!string) return "";
    const clean = string.toLowerCase();
    const char = clean.charAt(0).toUpperCase();
    return char + clean.slice(1);
  };
  
  export function cx<T>(values: T[]) {
    if (values.length === 0) return values[0];
    return values.join(" ").trimEnd();
  }