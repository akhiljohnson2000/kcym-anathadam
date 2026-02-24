"use client";

import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/kcym_anathadam/";

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              We&apos;d love to hear from you. Reach out for questions, prayers, or collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative mb-12 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-muted/50 p-8 md:p-10 text-center shadow-sm">
              <div className="relative z-10">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Instagram className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Reach us on Instagram
                </h2>
                <p className="font-body text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-7 leading-relaxed">
                  Send a message to our Instagram page. Our admin will get back to you soon.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-primary-foreground font-body font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Open Instagram
                </a>
              </div>
            </div>

            <div className="mt-12 rounded-xl overflow-hidden border border-border">
              <iframe
                title="St. Thomas Church, Anathadam"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.9680861370757!2d76.3003955!3d10.3444369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f8698b8a47d1%3A0xd6b96e8253b0227a!2sSt.%20Thomas%20Church%2C%20Anathadam!5e0!3m2!1sen!2sin!4v1771908977788!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
