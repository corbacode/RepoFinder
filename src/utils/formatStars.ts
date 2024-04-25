export default function formatStars(stars: number) {
  return stars >= 1000 ? (stars / 1000).toFixed(1) + "K" : stars.toString();
}
