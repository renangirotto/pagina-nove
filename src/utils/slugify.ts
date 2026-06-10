export const slugify = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/gi, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-{2,}/g, "-");
