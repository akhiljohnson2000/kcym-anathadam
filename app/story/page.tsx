"use client";

import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const milestones = [
  { year: "2015", title: "KCYM Unit Established", description: "The Anathadam unit of KCYM was officially formed with a handful of dedicated young members." },
  { year: "2016", title: "First Annual Retreat", description: "Organized the first spiritual retreat, bringing together youth for prayer and reflection." },
  { year: "2017", title: "Community Service Begins", description: "Launched outreach programs serving the local community with food drives and visits." },
  { year: "2019", title: "Growing Membership", description: "Membership grew significantly, with active participation in diocesan-level events." },
  { year: "2022", title: "Digital Transformation", description: "Embraced digital platforms for communication, event planning, and community building." },
  { year: "2024", title: "New Initiatives", description: "Launched Blood Cell and Digital Magazine initiatives to serve a wider audience." },
];

const members = [
  { name: "John Thomas", role: "President", initials: "JT" },
  { name: "Mary Joseph", role: "Vice President", initials: "MJ" },
  { name: "Abin Mathew", role: "Secretary", initials: "AM" },
  { name: "Sneha George", role: "Joint Secretary", initials: "SG" },
  { name: "Kevin Paul", role: "Treasurer", initials: "KP" },
  { name: "Anna Kurian", role: "PRO", initials: "AK" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function StoryPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Story</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              The journey of KCYM Anathadam — from humble beginnings to a vibrant community of faith-filled youth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="journey" className="w-full">
            {/* <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-10 h-12">
              <TabsTrigger value="journey" className="font-heading text-base">
                <BookOpen className="h-4 w-4 mr-2" />
                Our Journey
              </TabsTrigger>
              <TabsTrigger value="members" className="font-heading text-base">
                <Users className="h-4 w-4 mr-2" />
                Our Members
              </TabsTrigger>
            </TabsList> */}

            <TabsContent value="journey" className="mt-6">
              <div className="max-w-3xl mx-auto relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
                {milestones.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={i}
                    className={`relative flex items-start gap-6 mb-10 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1 z-10 ring-4 ring-background" />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="text-primary font-heading font-bold text-lg">{item.year}</span>
                      <h3 className="font-heading text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="font-body text-muted-foreground text-sm mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="members" className="mt-6">
              <p className="font-body text-muted-foreground text-center mb-10">
                The people who make KCYM Anathadam special
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {members.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={i}
                    className="glass-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="font-heading text-lg font-bold text-primary">{member.initials}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                    <p className="font-body text-sm text-primary mt-1">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
