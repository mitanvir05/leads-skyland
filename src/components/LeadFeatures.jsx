import React from "react";
import { motion } from "framer-motion";
import { Zap, Repeat, Users, Slack } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "High-Converting Templates",
    desc: "Deploy pre-built landing pages designed by CRO experts to maximize opt-ins.",
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "Smart Auto Follow-ups",
    desc: "Trigger email & SMS sequences immediately after signup to warm leads while they're hot.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Lead Qualification",
    desc: "Ask the right questions during capture to automatically segment high-value prospects.",
  },
  {
    icon: <Slack className="w-6 h-6" />,
    title: "Instant Routing",
    desc: "Push qualified leads directly to your Slack channels or CRM in real-time.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LeadFeatures() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900"
          >
            Built for <span className="text-indigo-600">performance.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 mt-4 text-lg"
          >
            Everything you need to capture, qualify, and route leads without touching a line of code.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {f.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}