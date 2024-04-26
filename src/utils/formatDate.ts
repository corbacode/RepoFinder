/**
 * Formats the given date string into a human-readable relative time string.
 *
 * @param {string} dateString - The date string to format.
 * @returns {string} - The formatted relative time string.
 */
export default function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  const timeUnits = [
    { unit: "year", divisor: 31536000 },
    { unit: "month", divisor: 2592000 },
    { unit: "week", divisor: 604800 },
    { unit: "day", divisor: 86400 },
    { unit: "hour", divisor: 3600 },
    { unit: "minute", divisor: 60 },
    { unit: "second", divisor: 1 },
  ];

  for (const { unit, divisor } of timeUnits) {
    const value = Math.floor(diffInSeconds / divisor);
    if (value >= 1) {
      return `${value} ${unit}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
