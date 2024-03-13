import React from "react";

export let peoples = [
  {
    username: "John Doe",
    jobRole: "Software Engineer",
    description:
      "Passionate about creating innovative solutions for complex problems. Currently working on cutting-edge technologies.",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    profileImage: "https://example.com/johndoe.jpg",
  },
  {
    username: "Jane Smith",
    jobRole: "UX Designer",
    description:
      "Dedicated to crafting seamless {} experiences that blend functionality with aesthetics.",
    github: "https://github.com/janesmith",
    twitter: "https://twitter.com/janesmith",
    instagram: "https://instagram.com/janesmith",
    profileImage: "https://example.com/janesmith.jpg",
  },
  {
    username: "Alex Johnson",
    jobRole: "Data Scientist",
    description:
      "Analyzing data to derive meaningful insights and drive data-driven decision-making.",
    github: "https://github.com/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    instagram: "https://instagram.com/alexjohnson",
    profileImage: "https://example.com/alexjohnson.jpg",
  },
  {
    username: "Emily Davis",
    jobRole: "Marketing Specialist",
    description:
      "Crafting compelling marketing campaigns that resonate with target audiences.",
    github: "https://github.com/emilydavis",
    twitter: "https://twitter.com/emilydavis",
    instagram: "https://instagram.com/emilydavis",
    profileImage: "https://example.com/emilydavis.jpg",
  },
  {
    username: "Michael Rodriguez",
    jobRole: "Product Manager",
    description:
      "Leading cross-functional teams to deliver products that exceed customer expectations.",
    github: "https://github.com/michaelrodriguez",
    twitter: "https://twitter.com/michaelrodriguez",
    instagram: "https://instagram.com/michaelrodriguez",
    profileImage: "https://example.com/michaelrodriguez.jpg",
  },
];

const useShowProfile = ({
  username,
  jobRole,
  description,
  twitter,
  github,
  instagram,
}) => {
  return (
    <div
      role="listitem"
      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
    >
      <div className="rounded overflow-hidden shadow-md bg-white">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img
              src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
              alt="Display Picture of Andres Berlin"
              role="img"
              className="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div className="px-6 mt-16">
          <h1 className="font-bold text-3xl text-center mb-1">{username}</h1>
          <p className="text-gray-800 text-sm text-center">{jobRole}</p>
          <p className="text-center text-gray-600 text-base pt-3 font-normal">
            {description}
          </p>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a href={github} className="mx-5">
              <div aria-label="Github" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>
            <a href={twitter} className="mx-5">
              <div aria-label="Twitter" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
            </a>
            <a href={instagram} className="mx-5">
              <div aria-label="Instagram" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default useShowProfile;
