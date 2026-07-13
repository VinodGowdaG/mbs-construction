"use client";

interface Props {
  applications: string[];
}

export default function ServiceApplications({
  applications,
}: Props) {
  return (
    <section id="applications" className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-5xl font-bold text-[#D62828]">
          Applications
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {applications.map((item) => (

            <div
              key={item}
              className="rounded-3xl border p-8 text-center shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#0B4EA2]">
                {item}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}