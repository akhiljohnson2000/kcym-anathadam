"use client";

import { motion } from "framer-motion";
import { Church, BookOpen, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const vicars = [
  { name: "Fr. Joseph", years: "1978–1995", contribution: "First parish priest; celebrated first Holy Mass in the region (1973) and led the establishment of the parish." },
  { name: "Fr. Jose", years: "1995–", contribution: "Led further development initiatives; parish community actively participated in all activities." },
  { name: "Fr. Stephen", years: "2023–Present", contribution: "Additional spiritual and infrastructural developments; parish continues to grow in faith, unity, and service." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const historyTimeline = [
  { year: "Early years", text: "The people of this region were mainly engaged in agriculture. The land was fertile, and farming was the primary source of livelihood. However, there were many hardships, including lack of proper roads, educational institutions, and basic facilities. The early settlers struggled to build a stable life here." },
  { year: "February 28, 1973", text: "Under the leadership of Rev. Fr. Joseph, Holy Mass was first celebrated in a small shed made of simple materials. That marked the beginning of organized spiritual life in this region. Before that, the faithful had to travel long distances to attend Mass and receive sacraments." },
  { year: "1974", text: "Efforts began to establish a permanent church. The faithful worked together tirelessly, contributing labor and resources. Their unity and determination laid the foundation for the spiritual growth of the community." },
  { year: "1975", text: "A chapel was constructed, and regular Holy Mass and catechism classes were started. With the growing number of believers, the need for a proper parish became evident." },
  { year: "July 3, 1978", text: "The church was officially declared a parish. Rev. Fr. Joseph became the first parish priest. This was a historic milestone for the faithful of the region." },
  { year: "1985", text: "A Lower Primary School was established to provide education to children in the locality. Later, in 1987, the school was upgraded. The church played a key role in promoting moral and academic development among students." },
  { year: "Following years", text: "Several improvements were made: construction of a new church building; expansion of parish facilities; development of catechism and youth movements; strengthening of faith formation programs." },
  { year: "1995", text: "Under the leadership of Rev. Fr. Jose, further development initiatives were undertaken. The parish community actively participated in all activities, contributing both financially and through voluntary service." },
  { year: "1996–1998", text: "Efforts were made to improve school facilities and infrastructure. In 1998, additional development works were carried out, including improvements in parish buildings and community services." },
  { year: "Early 2000s", text: "Modernization efforts continued. Various organizations within the parish became more active, including youth associations, women's groups, and charitable organizations." },
  { year: "2009", text: "New construction and renovation works were undertaken to strengthen parish infrastructure. The faithful remained united and cooperative throughout these developments." },
  { year: "2013–2016", text: "Further expansion activities were carried out in 2013 and 2014. In 2016, significant renovations were completed, ensuring better facilities for worship and parish activities." },
  { year: "April 22, 2018", text: "Another important milestone was achieved with major improvements to the church structure and surroundings." },
  { year: "October 28, 2019", text: "New parish initiatives were introduced, focusing on spiritual renewal and community service." },
  { year: "2023", text: "Under the leadership of Rev. Fr. Stephen, additional spiritual and infrastructural developments were undertaken. The parish continued to grow in faith, unity, and service." },
  { year: "Today", text: "The parish stands as a testimony to the dedication, sacrifice, and faith of the early pioneers and subsequent generations. The unity among the faithful, the leadership of devoted priests, and the grace of God have transformed this once underdeveloped area into a vibrant and spiritually strong community. The history of this parish is not just about buildings and milestones, but about faith, perseverance, and collective effort. It continues to move forward with hope and commitment to serving God and society." },
];

export default function ChurchPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Church className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              St. Thomas Church <span className="text-gradient-gold">Anathadam</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              A beacon of faith and community, guiding generations in the light of Christ.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-10 h-12">
              <TabsTrigger value="history" className="font-heading text-base">
                <BookOpen className="h-4 w-4 mr-2" />
                Our History
              </TabsTrigger>
              <TabsTrigger value="vicars" className="font-heading text-base">
                <Award className="h-4 w-4 mr-2" />
                Vicars
              </TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="mt-6">
              <div className="max-w-3xl mx-auto relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
                {historyTimeline.map((item, i) => (
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
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <span className="text-primary font-heading font-bold text-lg">{item.year}</span>
                      <p className="font-body text-muted-foreground text-sm mt-2 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vicars" className="mt-6">
              <div className="max-w-2xl mx-auto relative">
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
                {vicars.map((vicar, i) => (
                  <motion.div
                    key={vicar.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={i}
                    className="relative pl-14 md:pl-20 mb-10"
                  >
                    <div className="absolute left-4 md:left-8 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 ring-4 ring-background" />
                    <div className="glass-card rounded-xl p-6">
                      <span className="text-primary font-heading font-bold text-sm">{vicar.years}</span>
                      <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{vicar.name}</h3>
                      <p className="font-body text-muted-foreground text-sm mt-2">{vicar.contribution}</p>
                    </div>
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
