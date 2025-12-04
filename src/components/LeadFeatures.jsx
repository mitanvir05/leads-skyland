import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiRepeat, FiUsers, FiSlack } from "react-icons/fi";

const features = [
  { icon: <FiZap />, title: "High-converting templates", desc: "Prebuilt landing pages optimized for conversion." },
  { icon: <FiRepeat />, title: "Auto follow-ups", desc: "Email & SMS sequences to warm leads automatically." },
  { icon: <FiUsers />, title: "Qualification flows", desc: "Collect qualification answers to segment leads." },
  { icon: <FiSlack />, title: "CRM & Slack routing", desc: "Send leads directly to your team or CRM." },
];

export default function LeadFeatures() {
  return (
    <section id="features" className="py-16 container mx-auto px-6">
      <h3 className="text-3xl font-extrabold text-center">Built for performance</h3>
      <p className="text-center text-slate-600 mt-3 max-w-2xl mx-auto">
        Everything you need to capture, qualify, and route leads without custom engineering.
      </p>

      <div className="mt-10 grid md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white p-6 rounded-2xl shadow border border-slate-100 text-center"
          >
            <div className="text-3xl text-accent mx-auto w-fit">{f.icon}</div>
            <h4 className="mt-4 font-semibold">{f.title}</h4>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
