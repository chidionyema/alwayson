import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8 md:p-24 lg:p-32 xl:p-40">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Welcome to Always On Technologies
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-12">
          We are specialists in software development, user interface design, web and mobile development, cloud solutions, infrastructure, and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <Image
            src="/nextjs-logo.svg"
            alt="Next.js Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Next.js Development</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center">
            We excel in developing modern, high-performance web applications with Next.js.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <Image
            src="/ui-design.svg"
            alt="UI Design Icon"
            width={100}
            height={100}
            className="mb-4"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">User Interface Design</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center">
            Our team creates stunning and intuitive user interfaces to enhance user experiences.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <Image
            src="/cloud-solutions.svg"
            alt="Cloud Solutions Icon"
            width={100}
            height={100}
            className="mb-4"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Cloud Solutions</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center">
            Utilize our expertise in cloud computing to build scalable and resilient solutions.
          </p>
        </div>
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
