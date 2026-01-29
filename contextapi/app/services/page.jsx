import Header from "@/components/Header";
import ThemeWrapper from "@/components/ThemeWrapper";
export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and scalable web applications using React, Next.js, and modern technologies.",
    },
    {
      title: "Frontend Development",
      description:
        "Creating clean, user-friendly interfaces with React, Tailwind CSS, and modern UI practices.",
    },
    {
      title: "Backend Development",
      description:
        "Developing secure and efficient APIs using Node.js, Express, and databases.",
    },
    {
      title: "Full Stack Solutions",
      description:
        "End-to-end application development from UI to backend and deployment.",
    },
  ];

  return (
    <ThemeWrapper>
        <Header />
        <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
            <div
                key={index}
                className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
                <h2 className="text-xl font-semibold mb-2">
                {service.title}
                </h2>
                <p className="text-gray-600">
                {service.description}
                </p>
            </div>
            ))}
        </div>
        </div>
    </ThemeWrapper>
  );
}
