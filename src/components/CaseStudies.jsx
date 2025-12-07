import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, BarChart3 } from "lucide-react";

const cases = [
  {
    client: "FinFlow",
    tag: "Fintech",
    title: "Automating financial workflows",
    metric: "240%",
    metricLabel: "Increase in Lead Gen",
    desc: "We rebuilt the core onboarding engine, reducing drop-off by removing 4 friction points.",
    gradient: "from-blue-600 to-cyan-500",
    bg: "bg-blue-50",
    icon: TrendingUp,
  },
  {
    client: "HealthEase",
    tag: "Healthcare",
    title: "Scaling patient management",
    metric: "50k+",
    metricLabel: "Daily Active Users",
    desc: "A HIPPA-compliant architecture capable of handling millions of real-time sync events.",
    gradient: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    icon: Users,
  },
  {
    client: "MarketMinds",
    tag: "AdTech",
    title: "Real-time ad analytics",
    metric: "3x",
    metricLabel: "ROAS Improvement",
    desc: "Custom dashboard processing TBs of data to give advertisers instant feedback.",
    gradient: "from-purple-600 to-pink-500",
    bg: "bg-purple-50",
    icon: BarChart3,
  },
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-purple-600 font-bold tracking-wider uppercase text-sm"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-2"
            >
              We build software that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                moves the needle.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full"
            >
              {/* Image / Abstract Visual Area */}
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6 bg-gray-100 border border-gray-100">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`}
                />

                {/* Abstract UI Elements (Floating Cards) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-48 h-32 bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      <item.icon size={16} />
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-gray-100 rounded-full" />
                      <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
                    </div>

                    {/* Floating badge */}
                    <div
                      className={`absolute -right-4 -top-4 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg bg-gradient-to-br ${item.gradient}`}
                    >
                      {item.metric.replace(/\D/g, "")}%
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      item.bg
                    } ${item.gradient.split(" ")[1].replace("to-", "text-")}`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    {item.client}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>

                {/* Bottom Metric Row */}
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <p
                      className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}
                    >
                      {item.metric}
                    </p>
                    <p className="text-xs text-gray-400 font-medium uppercase">
                      {item.metricLabel}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-purple-600 group-hover:text-purple-600 transition-colors bg-white"
                  >
                    <ArrowUpRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile only button */}
        <div className="mt-12 text-center md:hidden">
          <button className="px-6 py-3 border border-gray-200 rounded-lg text-gray-900 font-semibold">
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
