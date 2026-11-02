"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FadeUp, motion } from "@/utils/animations";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EFFECTIVE_DATE = "July 2026";
const LAST_UPDATED_DATE = "July 2026";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you fill out a contact form, request product information, or communicate with us. This may include your name, email address, phone number, company name, and the content of your message.",
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to respond to your inquiries, provide product information and quotations, improve our services, send relevant communications about our products and industry updates (with your consent), and comply with legal obligations.",
    },
    {
      title: "Data Sharing & Disclosure",
      content: "We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share data with trusted service providers who assist us in operating our website, conducting our business, or servicing you, provided those parties agree to keep this information confidential.",
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission is 100% secure.",
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also object to or restrict our processing of your data. To exercise these rights, please contact us at fortschritthealthcare@gmail.com.",
    },
    {
      title: "Cookies",
      content: "Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of the site. See our Cookie Policy for more details.",
    },
    {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with a revised effective date.",
    },
    {
      title: "Contact Us",
      content: "If you have questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at fortschritthealthcare@gmail.com or write to us at our registered office.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary pb-24 pt-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sky-300 text-xs font-bold uppercase tracking-widest mb-4"
          >
            Data Protection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold"
          >
            Effective Date: {EFFECTIVE_DATE} · Last Updated: {LAST_UPDATED_DATE}
          </motion.p>
        </div>
      </section>

      {/* Main Legal Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeUp className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-8 md:p-16 space-y-10">
          <p className="text-slate-600 leading-relaxed mb-10 text-lg font-semibold border-b border-slate-100 pb-8">
            Fortschritt Healthcare Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This policy describes how we collect, use, and safeguard your personal information when you visit our website or interact with us.
          </p>
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={s.title} className="group">
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 text-primary text-sm font-black">
                    {i + 1}
                  </span>
                  {s.title}
                </h2>
                <p className="text-slate-500 leading-relaxed font-medium pl-11">
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary/5 text-primary font-bold rounded-2xl hover:bg-primary/10 transition-colors"
          >
            <span className="material-icons text-sm">mail_outline</span>
            Contact Us With Questions
          </Link>
        </FadeUp>
      </main>

      <Footer />
    </div>
  );
}
