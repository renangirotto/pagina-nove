export default function getSetiesType(collection?: string): string {
  if (!collection) {
    return "One-shot";
  }

  return "Series";
}
