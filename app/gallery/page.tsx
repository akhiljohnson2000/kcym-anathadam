import { readdirSync } from "fs";
import { join } from "path";
import GalleryClient from "./GalleryClient";

const IMAGE_EXT = [".png", ".jpg", ".jpeg", ".gif", ".webp"];

function getGalleryImages(): { id: string; src: string; title: string; category: string }[] {
  try {
    const dir = join(process.cwd(), "public", "gallery");
    const files = readdirSync(dir);
    const categories = ["Events", "Retreats", "Celebrations", "Outreach"];
    return files
      .filter((f) => IMAGE_EXT.some((ext) => f.toLowerCase().endsWith(ext)))
      .map((filename, i) => {
        const name = filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
        const title = name.replace(/\b\w/g, (c) => c.toUpperCase()) || `Photo ${i + 1}`;
        return {
          id: `img-${i + 1}`,
          src: `/gallery/${filename}`,
          title,
          category: categories[i % categories.length] ?? "Events",
        };
      })
      .sort((a, b) => a.title.localeCompare(b.title))
      .reverse();
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const images = getGalleryImages();
  return <GalleryClient images={images} />;
}
