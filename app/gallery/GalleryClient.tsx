"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";

const categories = ["All", "Events", "Retreats", "Celebrations", "Outreach"];

const heights = ["h-48", "h-64", "h-56", "h-72", "h-52", "h-60", "h-48", "h-68", "h-56"];

type GalleryItem = {
  id: string;
  src: string;
  title: string;
  category: string;
};

export default function GalleryClient({ images }: { images: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? images
        : images.filter((item) => item.category === activeCategory),
    [activeCategory, images],
  );

  return (
    <>
      <section className="pt-28 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Capturing moments of faith, fellowship, and joy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-body text-sm transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-5xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 break-inside-avoid"
                >
                  <div
                    onClick={() => setSelectedItem(item)}
                    className={`${heights[i % heights.length]} rounded-xl cursor-pointer hover:shadow-lg transition-shadow flex flex-col overflow-hidden border border-border bg-muted group`}
                  >
                    <div className="relative flex-1 min-h-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 bg-background/80">
                      <span className="text-xs font-body text-muted-foreground">{item.category}</span>
                      <h3 className="font-heading font-semibold text-foreground text-sm mt-0.5">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {images.length === 0 && (
            <p className="text-center font-body text-muted-foreground mt-8 text-sm">
              No images in gallery yet. Add images to <code className="bg-muted px-1 rounded">public/gallery/</code> to see them here.
            </p>
          )}
          {images.length > 0 && (
            <p className="text-center font-body text-muted-foreground mt-8 text-sm">
              {images.length} photo{images.length !== 1 ? "s" : ""} from <code className="bg-muted px-1 rounded">public/gallery/</code>. Add more images to the folder to list them here.
            </p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 p-2 text-primary-foreground hover:bg-white/20 rounded-full z-10"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="font-heading text-xl font-bold text-primary-foreground">{selectedItem.title}</h3>
                <p className="font-body text-primary-foreground/80 text-sm mt-1">{selectedItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
