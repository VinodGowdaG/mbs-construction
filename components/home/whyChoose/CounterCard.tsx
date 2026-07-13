"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  number: number;
  suffix?: string;
  label: string;
}

export default function CounterCard({
  number,
  suffix,
  label,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:shadow-2xl"
    >
      <h3 className="text-5xl font-extrabold text-[#D62828]">
        {inView && <CountUp end={number} duration={2.5} />}
        {suffix}
      </h3>

      <p className="mt-3 font-medium text-[#0B4EA2]">
        {label}
      </p>
    </div>
  );
}