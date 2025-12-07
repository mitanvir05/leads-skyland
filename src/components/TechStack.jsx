import { motion } from "framer-motion";
import { 
  Database, Layout, Server, Cpu, Globe, Lock, 
  Code2, Cloud, Layers 
} from "lucide-react";

// Added specific colors for a "richer" UI feel
const techs = [
  { 
    icon: Layout, 
    name: "Frontend Architecture", 
    details: "React • Next.js • Tailwind", 
    color: "text-blue-600",
    bg: "bg-blue-50 group-hover:bg-blue-100",
    border: "group-hover:border-blue-200"
  },
  { 
    icon: Server, 
    name: "Backend Systems", 
    details: "Node.js • Python • Go", 
    color: "text-green-600",
    bg: "bg-green-50 group-hover:bg-green-100",
    border: "group-hover:border-green-200"
  },
  { 
    icon: Database, 
    name: "Data Strategy", 
    details: "PostgreSQL • Mongo • Redis", 
    color: "text-amber-600",
    bg: "bg-amber-50 group-hover:bg-amber-100",
    border: "group-hover:border-amber-200"
  },
  { 
    icon: Cloud, 
    name: "Cloud Infrastructure", 
    details: "AWS • Docker • Kubernetes", 
    color: "text-purple-600",
    bg: "bg-purple-50 group-hover:bg-purple-100",
    border: "group-hover:border-purple-200"
  },
  { 
    icon: Layers, 
    name: "CMS & Headless", 
    details: "Sanity • Strapi • Shopify", 
    color: "text-pink-600",
    bg: "bg-pink-50 group-hover:bg-pink-100",
    border: "group-hover:border-pink-200"
  },
  { 
    icon: Lock, 
    name: "Enterprise Security", 
    details: "OAuth 2.0 • JWT • SOC2", 
    color: "text-indigo-600",
    bg: "bg-indigo-50 group-hover:bg-indigo-100",
    border: "group-hover:border-indigo-200"
  },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4"
          >
            Our Technology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6"
          >
            Built on a foundation of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              engineering excellence.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            We don't chase trends. We use battle-tested technologies that guarantee speed, security, and scalability for your business.
          </motion.p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ${tech.border}`}
            >
              <div className="flex items-start space-x-4">
                {/* Icon Box */}
                <div className={`p-4 rounded-xl transition-colors duration-300 ${tech.bg}`}>
                  <tech.icon 
                    size={28} 
                    className={`${tech.color} transform group-hover:rotate-6 transition-transform duration-300`} 
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {tech.name}
                  </h3>
                  <div className="h-1 w-12 bg-gray-100 my-3 rounded-full overflow-hidden">
                    <div className={`h-full w-0 group-hover:w-full transition-all duration-500 ease-out bg-current ${tech.color}`} />
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    {tech.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;