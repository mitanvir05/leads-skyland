import React from "react";
import { motion } from "framer-motion";

export default function LeadsHero() {
  return (
    <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Turn visitors into customers — reliably.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-6 text-lg text-slate-600 max-w-xl"
        >
          Build predictable pipelines with conversion-focused landing pages,
          automation flows, and high-converting contact capture — all productized
          for speed.
        </motion.p>

        <div className="mt-8 flex gap-4">
          <a
            href="#capture"
            className="inline-flex items-center gap-3 bg-accent text-white px-5 py-3 rounded-full font-semibold shadow"
          >
            Get early access
          </a>

          <a
            href="#features"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            How it works
          </a>
        </div>

        <div className="mt-6 flex gap-3 text-sm text-slate-500">
          <span className="px-3 py-1 border rounded-full">Lead quality focused</span>
          <span className="px-3 py-1 border rounded-full">Works with CRMs</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="rounded-2xl bg-white shadow-2xl p-6 border border-slate-100 w-full md:max-w-lg">
          <div className="text-sm text-slate-400">Example lead form</div>
          <div className="mt-4">
            <div className="bg-slate-50 rounded-md p-4 text-sm text-slate-700">
              Capture a user's name, email and company — then route to Slack/CRM.
            </div>
          </div>
        </div>

        <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-accent/8 rounded-full blur-3xl -z-10" />
      </motion.div>
    </section>
  );
}
