import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle, User, Zap } from "lucide-react";

export default function LeadsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32 lg:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#818cf8_1px,transparent_1px),linear-gradient(to_bottom,#818cf8_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Ambient Gradient Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 text-indigo-600 text-sm font-medium shadow-sm mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              v2.0 Now Available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900 tracking-tight"
            >
              Turn visitors into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                revenue, reliably.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-slate-600 leading-relaxed"
            >
              Build predictable pipelines with conversion-focused landing pages, 
              smart automation flows, and high-converting contact capture forms 
              — all productized for speed.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <PlayCircle className="w-5 h-5 text-indigo-600" />
                View Demo
              </a>
            </motion.div>

            {/* Social Proof / Trust */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden">
                     <User className="w-6 h-6 text-slate-400 mt-2" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex gap-1 text-yellow-500">
                  {"★★★★★"}
                </div>
                <p className="text-slate-500 font-medium">Trusted by 2,000+ marketers</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Visual / Mock UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* The "Card" Container */}
            <div className="relative w-full max-w-md">
              
              {/* Abstract Blob Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-200/50 blur-[80px] -z-10" />

              {/* Main Floating Card (Success Notification) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-2xl shadow-indigo-500/20 border border-slate-100 overflow-hidden"
              >
                {/* Mock Browser/App Header */}
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-slate-500 font-semibold text-sm uppercase tracking-wider">Live Activity</h3>
                    <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Active
                    </div>
                  </div>

                  {/* Notification Item */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-100 mb-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 text-white">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">New High-Value Lead</p>
                      <p className="text-sm text-slate-600">Sarah from <span className="font-semibold">Acme Corp</span> just requested a demo.</p>
                      <p className="text-xs text-indigo-600 font-medium mt-2">Captured 2m ago via Pricing Page</p>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Conversion Rate</p>
                      <p className="text-xl font-bold text-slate-900">4.8% <span className="text-green-500 text-sm">↑ 12%</span></p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Total Leads</p>
                      <p className="text-xl font-bold text-slate-900">1,240</p>
                    </div>
                  </div>

                  <div className="mt-6">
                     <button className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800">View Details</button>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge Decoration */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">CRM Sync</p>
                  <p className="text-sm font-bold text-slate-900">Completed</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}