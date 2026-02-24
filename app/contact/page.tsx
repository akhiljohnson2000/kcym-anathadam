"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

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
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Vicar</h3>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="font-body text-muted-foreground">
                    Fr. Varghese Arrikat — +91 94475 2xxxx
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Church Officials</h3>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="font-body text-muted-foreground">
                    Willson Mangalan — +91 90615 1xxxx
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">KCYM Officials</h3>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="font-body text-muted-foreground">
                    President — Noel — +91 97456 1xxxx
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Unit Officials</h3>
                <p className="font-body text-muted-foreground">—</p>
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
