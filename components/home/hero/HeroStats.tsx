"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  Users,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    title: "Projects Completed",
    value: 100,
    suffix: "+",
    icon: Building2,
    color: "from-blue-600 to-blue-500",
  },
  {
    title: "Years Experience",
    value: 10,
    suffix: "+",
    icon: CalendarDays,
    color: "from-red-600 to-red-500",
  },
  {
    title: "Happy Clients",
    value: 50,
    suffix: "+",
    icon: Users,
    color: "from-blue-600 to-red-600",
  },
  {
    title: "Quality Commitment",
    value: 100,
    suffix: "%",
    icon: BadgeCheck,
    color: "from-red-600 to-blue-600",
  },
];

export default function HeroStats() {
  return (
    <div className="hidden lg:flex justify-center">
      <div className="space-y-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, x: 80 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -12, 0],
              }}
              transition={{
                delay: index * 0.2,
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="group relative w-80 overflow-hidden rounded-3xl border border-white/20 bg-white/15 p-6 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/15 hover:shadow-2xl"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
              />

              <div className="relative flex items-center gap-5">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color}`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <div>
                  <h3 className="text-4xl font-extrabold text-white">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </h3>

                  <p className="mt-1 text-sm tracking-wide text-slate-300">
                    {stat.title}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}