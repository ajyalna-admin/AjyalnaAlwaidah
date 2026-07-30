"use client";

import { motion } from "framer-motion";
import { Mail, Send, Twitter, Linkedin } from "lucide-react";
import { contact, brand } from "@/lib/data";

const links = [
  { label: "البريد الإلكتروني", value: brand.email, href: `mailto:${brand.email}`, icon: Mail },
  { label: "تيليجرام", value: "Ajyalna_Alwaidah", href: brand.telegram, icon: Send },
  { label: "إكس", value: "AjyalnaAlwaidah", href: brand.twitter, icon: Twitter },
  { label: "لينكدإن", value: "Ajyalna Alwaidah", href: brand.linkedin, icon: Linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="text-sm font-bold text-sky-deep mb-3">{contact.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15]">
            {contact.title}
          </h2>
          <p className="mt-4 text-muted text-lg leading-loose">{contact.description}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.label === "البريد الإلكتروني" ? undefined : "_blank"}
              rel={l.label === "البريد الإلكتروني" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky/15">
                <l.icon className="h-4 w-4 text-sky-deep" />
              </span>
              <div>
                <p className="text-xs font-bold text-muted">{l.label}</p>
                <p className="font-display font-bold mt-1 text-sm break-all">{l.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
