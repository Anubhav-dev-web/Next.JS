import React from "react";
import Head from "next/head"; // For SEO elements
import Image from "next/image"; // For responsive image handling

export const metadata = {
  title: "Next.js learning - About Us",
  description: "Learn more about us",
};

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Head>
        <title>Your App Name - About Us</title>
        <meta name="description" content="Learn more about us" />
        {/* Add other SEO meta tags as needed */}
      </Head>
      <div className="max-w-md flex flex-col gap-8 px-8 py-12 bg-white rounded-xl shadow-md">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        </div>
        <p className="text-gray-600 leading-loose">
          This is your company's story. Explain who you are, what you do, and
          your mission. Highlight your values and what motivates your team. You
          can also mention your founding year, location, and any key
          achievements.
        </p>
        <div className="flex justify-center items-center">
          <a
            href="#" // Replace with your contact page or form link
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Get in Touch
          </a>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Add team member sections here (optional) */}
          <div className="w-full md:w-1/2 flex flex-col items-center gap-2">
            <Image
              src="/team-member-1.jpg" // Replace with team member image path
              alt="Team member 1"
              width={150}
              height={150}
              layout="fixed"
              className="rounded-full" // Apply rounded corners for profile pics
            />
            <p className="text-gray-600 text-center font-medium">John Doe</p>
            <p className="text-gray-500 text-center text-sm">Founder & CEO</p>
          </div>
          {/* Add more team member sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
