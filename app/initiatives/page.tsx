"use client";

import { motion } from "framer-motion";
import { Droplets, Newspaper, CalendarDays, Rocket } from "lucide-react";

const initiatives = [
  {
    icon: Droplets,
    title: "Blood Cell",
    description:
      "A dedicated blood donation initiative to support those in need. We aim to build a network of willing donors within our community and beyond.",
    status: "Coming Soon",
    color: "text-accent",
    bgColor: "bg-accent/10",
    badgeColor: "bg-accent/20 text-accent",
  },
  {
    icon: Newspaper,
    title: "Monthly Digital Magazine",
    description:
      "A creative platform for our members to share stories, reflections, articles, and artwork. Celebrating our community's talent and voice.",
    status: "Coming Soon",
    color: "text-primary",
    bgColor: "bg-primary/10",
    badgeColor: "bg-primary/20 text-primary",
  },
  {
    icon: CalendarDays,
    title: "Upcoming Events",
    description:
      "Retreats, prayer meetings, outreach programs, and community celebrations. Stay tuned for exciting events planned throughout the year.",
    status: "Coming Soon",
    color: "text-sage",
    bgColor: "bg-sage/10",
    badgeColor: "bg-sage/20 text-sage",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function InitiativesPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Initiatives</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Forward-looking projects that reflect our commitment to service, creativity, and community building.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i}
                className="glass-card rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className={`h-7 w-7 ${item.color}`} />
                  </div>
                  <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-block glass-card rounded-full px-8 py-4">
              <p className="font-heading text-lg text-foreground">
                🙏 Stay Tuned — Great things are on the way!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
