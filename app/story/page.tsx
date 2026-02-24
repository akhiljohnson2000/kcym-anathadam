"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const storyParagraphs = [
  "1978 മാനം CMS കോളേജിൽ വെച്ച് രൂപം കൊണ്ട് ക്രൈസ്തവസഭയുടെ ഒഫീഷ്യൽ യുവജന ധാർമ്മികസംഘടന കേരള കാത്തലിക് യൂത്ത് മൂവ്മെന്റ് അഥവാ KCYM. 1998-ൽ ആനത്തടം സെന്റ് തോമസ് ദേവാലയത്തിലും ഔദ്യോഗികമായി KCYM സംഘടന രൂപം കൊണ്ടു. നാളിതുവരെ ഇടവകയിലെ യുവതീ യുവാക്കളെ ആത്മീയമായും കൂട്ടായ്മയിലും സ്നേഹത്തിലും ഇടവകയുടെ വിവിധ പ്രവർത്തനങ്ങളിലും ചേർത്തു നിർത്താൻ KCYM സംഘടന ശക്തമായ പങ്കുവഹിച്ചു. ആത്മീയ പ്രവർത്തനങ്ങൾ, സാമൂഹിക പ്രതിബദ്ധതയുള്ള പ്രവർത്തനങ്ങൾ, കലാപരവും കായികപരവുമായ അഭിവൃദ്ധിയെ ലക്ഷ്യമിട്ട് നടത്തുന്ന വിവിധ മത്സരങ്ങൾ എന്ന് തുടങ്ങി അന്നം ഇന്നും സഭയുടേയും ആനത്തടം ഇടവകയുടേയും കരുത്തും കാവലാളുമായി തീർന്ന ഒരുകൂട്ടം ചെറുപ്പക്കാരുടെ, ചങ്കുറപ്പിന്റെ, കൂട്ടായ്മയുടെ കഥ പറയുന്ന പ്രസ്ഥാനം KCYM ANATHADAM.",
];

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
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              KCYM ആനത്തടം
            </h2> */}
            <div className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed text-left space-y-6">
              {storyParagraphs.map((para, i) => (
                <p key={i} style={{lineHeight: '50px', color: 'black'}}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
