/**
 * Formats the given number of stars into a human-readable string.
 *
 * @param {number} stars - The number of stars.
 * @returns {string} - The formatted string.
 */
export default function formatStars(stars: number) {
  return stars >= 1000 ? (stars / 1000).toFixed(1) + "K" : stars.toString();
}
