import { PATH_IMG_COVERS } from "./constants";
import { slugify } from "./slugify";

export function getCoverPath(cover: string, series?: string, title?: string): string {
  const folder = slugify(series ?? title ?? "");
  return `${PATH_IMG_COVERS}/${folder}/${cover}`;
}
