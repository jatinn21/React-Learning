import React, { useState } from "react";
import useShowProfile from "./useShowProfile";
import { useQuery } from "react-query";

let peoples = [
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
      "Dedicated to crafting seamless user experiences that blend functionality with aesthetics.",
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
  {
    username: "Sophie Brown",
    jobRole: "Graphic Designer",
    description:
      "Bringing creativity to life through visually stunning designs and illustrations.",
    github: "https://github.com/sophiebrown",
    twitter: "https://twitter.com/sophiebrown",
    instagram: "https://instagram.com/sophiebrown",
    profileImage: "https://example.com/sophiebrown.jpg",
  },
  {
    username: "Daniel Kim",
    jobRole: "AI Researcher",
    description:
      "Exploring the frontiers of artificial intelligence to create intelligent and autonomous systems.",
    github: "https://github.com/danielkim",
    twitter: "https://twitter.com/danielkim",
    instagram: "https://instagram.com/danielkim",
    profileImage: "https://example.com/danielkim.jpg",
  },
  {
    username: "Olivia White",
    jobRole: "Content Creator",
    description:
      "Crafting engaging content that tells compelling stories through various multimedia platforms.",
    github: "https://github.com/oliviawhite",
    twitter: "https://twitter.com/oliviawhite",
    instagram: "https://instagram.com/oliviawhite",
    profileImage: "https://example.com/oliviawhite.jpg",
  },
  {
    username: "William Turner",
    jobRole: "Financial Analyst",
    description:
      "Analyzing financial data to provide insights and support strategic decision-making.",
    github: "https://github.com/williamturner",
    twitter: "https://twitter.com/williamturner",
    instagram: "https://instagram.com/williamturner",
    profileImage: "https://example.com/williamturner.jpg",
  },
  {
    username: "Mia Lee",
    jobRole: "Fitness Trainer",
    description:
      "Helping individuals achieve their fitness goals through personalized training programs and nutrition guidance.",
    github: "https://github.com/mialeetrainer",
    twitter: "https://twitter.com/mialeetrainer",
    instagram: "https://instagram.com/mialeetrainer",
    profileImage: "https://example.com/mialeetrainer.jpg",
  },
];

function Profile() {
  let [user, setUser] = useState({});

  const findUser = () => {
    let FetchingUser = Math.trunc(Math.random() * peoples.length + 1);
    console.log(FetchingUser, " Number generated");
    setUser(peoples[FetchingUser]);
    return null;
  };

  const { data, error, status } = useQuery("myData", findUser, {
    cacheTime: 1000,
    staleTime: 1000,
    onError: (error) => console.log("errorrrr", error),
    onSuccess: (data) => console.log("Yeppiiiiiiiiii", user),
    refetchOnWindowFocus: true,
  });

  if (error) return <h1>{error}</h1>;
  if (status == "pending") return <h2>Waittttttttttttt</h2>;
  // Pass the user state to useShowProfile
  return user ? useShowProfile(user) : <h1>Data is Loading</h1>;
}

export default Profile;
