import { IconType } from "react-icons";
import { FaLaptopCode, FaUserCog, FaCloud, FaServer, FaMobileAlt, FaRobot } from "react-icons/fa";

type Service = {
  title: string;
  icon: IconType;
  description: string;
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8 md:p-16 lg:p-24 xl:p-32 bg-gray-100 min-h-screen">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
          Welcome to Always On Technologies
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
          We are specialists in software development, user interface design, web and mobile development, cloud solutions, infrastructure, and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="mt-16">
        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}

const services: Service[] = [
  {
    title: "Software Development",
    icon: FaLaptopCode,
    description: "We deliver custom software solutions tailored to your business needs.",
  },
  {
    title: "User Interface Design",
    icon: FaUserCog,
    description: "Our designers create intuitive and beautiful interfaces to enhance user experiences.",
  },
  {
    title: "Web and Mobile Development",
    icon: FaMobileAlt,
    description: "We specialize in building responsive and feature-rich web and mobile applications.",
  },
  {
    title: "Cloud Solutions",
    icon: FaCloud,
    description: "Utilize our expertise in cloud computing to build scalable and resilient solutions.",
  },
  {
    title: "Infrastructure",
    icon: FaServer,
    description: "We provide infrastructure solutions to support your applications and services.",
  },
  {
    title: "Automation",
    icon: FaRobot,
    description: "Automate repetitive tasks and streamline your business processes for efficiency.",
  },
];

function ServiceCard({ title, icon, description }: Service) {
  const Icon = icon;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
      <Icon className="text-5xl text-blue-500 mb-4" />
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-base md:text-lg lg:text-xl text-center text-gray-700">{description}</p>
    </div>
  );
}
