"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cross, Users, Heart } from "lucide-react";
import BibleQuoteSlider from "@/components/BibleQuoteSlider";

const highlights = [
  {
    icon: Cross,
    title: "Faith",
    description:
      "Rooted in the teachings of Christ, we nurture spiritual growth and devotion among our youth.",
  },
  {
    icon: Users,
    title: "Unity",
    description:
      "Together as one family, we stand united in purpose, celebrating our bonds of fellowship.",
  },
  {
    icon: Heart,
    title: "Service",
    description:
      "Reaching out with love and compassion, we serve our community and those in need.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-church-1.webp"
            alt="St. Thomas Church, Anathadam"
            fill
            className="object-cover object-[center_20%]"
            priority
            sizes="100vw"
            style={{ width: 'auto !important', height: '100% !important' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-sunrise z-[1]" />
        {/* <div className="absolute inset-0 bg-foreground/20 z-[2]" /> */}
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              About <span className="text-gradient-gold">KCYM Anathadam</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="font-body text-muted-foreground leading-relaxed text-lg"
            >
              The Kerala Catholic Youth Movement (KCYM) Anathadam Unit is a vibrant community of young
              believers committed to growing in faith, serving the church, and making a positive
              impact in society. Under the patronage of St. Thomas Church, Anathadam, our youth
              group fosters leadership, spiritual formation, and a deep sense of brotherhood among
              its members.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i}
                className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BibleQuoteSlider />
    </>
  );
}
