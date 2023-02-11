import React from "react";

import spotifyapplemusic from "../../assets/projectImages/spotifyapplemusic.png";
import younglambda from "../../assets/projectImages/younglambda.png";
import connected from "../../assets/projectImages/connected.png";
import internshipportal from "../../assets/projectImages/internshipportal.png";
import hurricanedetect from "../../assets/projectImages/hurricanedetect.png";
import ring from "../../assets/projectImages/ring.png";
import neuralnetwork from "../../assets/projectImages/neuralnetwork.png";
import knightrandomwalk from "../../assets/projectImages/knightrandomwalk.png";
import spellcheck from "../../assets/projectImages/spellcheck.png";
import iomodel from "../../assets/projectImages/iomodel.png";

const projects = [
  {
    id: 10,
    name: "Apple Music - Spotify Converter",
    description:
      "(coming soon) A web app for converting Apple Music playlists to Spotify, and the other way around.  Requires Apple Music and Spotify accounts.  Creating this so when my friends send me their Spotify playlists I can easily load them into Apple Music.  Apple Music FTW!",
    image: spotifyapplemusic,
    link: "https://www.github.com/jventura1738/",
    keywords: [
      "Python",
      "Flask",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Spotify API",
      "Apple Music API",
    ].sort(),
  },
  {
    id: 9,
    name: '"Young Lambda"',
    description:
      "The official KinetiKZ discord bot using COC API!  This bot tracks wars, donations, and more.  It also has month/season leaderboard tracking to track the best players my various metrics in the clan.",
    image: younglambda,
    link: "https://www.github.com/jventura1738",
    keywords: ["Python", "Clash of Clans API", "Discord.py", "COC.py"].sort(),
  },
  {
    id: 8,
    name: "CONNECTED (Hack Harvard 2022)",
    description:
      "A social media app aimed at safe community interaction.  This was a hackathon project at Hack Harvard 2022.",
    image: connected,
    link: "www.github.com/jventura1738/",
    keywords: [
      "Python",
      "Flask",
      "Google Firebase",
      "JavaScript",
      "React.js",
      "Next.js",
      "Hackathon",
    ].sort(),
  },
  {
    id: 7,
    name: "Student Internship Portal",
    description:
      "This web application facilitates the discovery, acquisition, and completion of an internship.  It was created as a group capstone project for my senior year at Salisbury University, where I was the team leader and mostly responsible for the backend (Python, Flask, PostgreSQL).",
    image: internshipportal,
    link: "https://www.github.com/jventura1738/InternshipPortal",
    keywords: [
      "Python",
      "Flask",
      "PostgreSQL",
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "Group Capstone",
      "Database",
    ].sort(),
  },
  {
    id: 6,
    name: "Hurricane Detection (Hack MIT 2021)",
    description:
      "A web app for tracking hurricanes and providing emergency preparation resources.  This was a hackathon project at Hack MIT 2021.",
    image: hurricanedetect,
    link: "https://www.github.com/jacobduncan00/hackmit2021",
    keywords: [
      "Python",
      "Flask",
      "JavaScript",
      "Hackathon",
      "React.js",
      "Google Maps API",
      "Jupyter Lab",
      "Data Visualization",
    ].sort(),
  },
  {
    id: 5,
    name: "ArXiV Search Engine (RING)",
    description:
      'A research paper search engine "RING" powered by a parallelized Page Rank + HITS algorithm optimized using compressed sparse row (CSR) matrix formatting from scratch.  Extremely optimized for speed and scalability, utilizing MPI for parallelization, matrix file partitioning, and sparse matrix encodings.',
    image: ring,
    link: "https://www.github.com/jventura1738/COSC420",
    keywords: [
      "C",
      "MPI",
      "Page Rank",
      "HITS",
      "Parallel Algo",
      "SEO",
      "Big Data",
      "BST",
      "CSR Matrix Format",
      "Partitioned Graph",
      "Distributed Algo",
    ].sort(),
  },
  {
    id: 4,
    name: "Titanic Survival Prediction",
    description:
      "Created neural network and K-NN models from scratch to predict the survival of passengers on the Titanic.  Model artifact produced ~82% accuracy.",
    image: neuralnetwork,
    link: "https://www.github.com/jventura1738/COSC311",
    keywords: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Jupyter Lab",
      "Seaborn",
      "Neural Nets",
      "K-NN",
      "Data Visualization",
    ].sort(),
  },
  {
    id: 3,
    name: "Knight Random Walk Simulation",
    description:
      "A simulation and demonstration of expected numer of moves to return to his corner.  Solution and Proof (written in LaTeX) of the expected numer of moves is also included within the GitHub repository.  This simulation is optimized for speed and is clean of memory leaks.",
    image: knightrandomwalk,
    link: "https://www.github.com/jventura1738/COSC320",
    keywords: [
      "C++",
      "Make",
      "Random Walk",
      "Markov Chain",
      "Probability",
      "Proofs",
      "Algorithms",
      "Graphs",
      "Chess",
    ].sort(),
  },
  {
    id: 2,
    name: "Auto-Correct",
    description:
      "A program that suggests fixes to misspelled words and lets user add unknown words to the dictionary.  The dictionary is a hash-table (doubly linked list chaining) from scratch (txt database) and is optimized for speed and is clean of memory leaks.",
    image: spellcheck,
    link: "https://www.github.com/jventura1738/COSC320",
    keywords: [
      "C++",
      "Make",
      "Hash Table",
      "Doubly List",
      "Hashing",
      "File IO",
      "Algorithms",
    ].sort(),
  },
  {
    id: 1,
    name: "Wassily Leontief IO Model",
    description:
      "A C++ implementation and simulation of the Leontief IO model from scratch (matrix mulitplication, inversion, determinant, co-factor expansion, etc.).  The model is used to predict the impact of a change in the economy.  The model is also optimized for speed and is clean of memory leaks.",
    image: iomodel,
    link: "https://www.github.com/jventura1738/COSC320",
    keywords: [
      "C++",
      "Make",
      "Valgrind",
      "Matrix",
      "Algorithms",
      "Economics",
      "File IO",
      "Determinant",
      "Inversion",
      "Linear Algebra",
    ].sort(),
  },
];

const Projects = ({ theme, toggleTheme, themeStyles }) => {
  return (
    <div className="text-white mb-10">
      <div className="grid grid-cols-1">
        <div className="col-span-1 text-center">
          <h1 className="text-6xl my-10">My Projects.</h1>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.name + " card."}
            className="relative bg-theme/50 rounded-2xl h-72 w-11/12 mx-auto col-span-1 grid grid-cols-2 gap-2"
          >
            <div
              key="Project Description"
              className="absolute flex-row rounded-2xl top-0 right-0 bottom-0 left-0 p-3 bg-theme opacity-0 hover:opacity-80 hover:pointer-events-auto duration-300"
            >
              <p className="flex-1 text-center">{project.description}</p>
              <a
                href={project.link}
                className="flex justify-center text-center m-5"
              >
                <button className="bg-purple-500 hover:bg-purple-700 duration-300 text-white font-bold py-2 px-4 rounded-full">
                  View Project (link may not work yet)
                </button>
              </a>
            </div>
            <div id="Project Image" className="span-col-1">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-2xl h-72 w-72 cursor-pointer"
              />
            </div>
            <div id="Name & keywords" className="row-span-1 grid grid-rows-4">
              <div id="Project Name" className="mt-3 row-span-1">
                <h1 className="text-xl text-center">{project.name}</h1>
                <hr className="w-40 h-0.5 my-3 mx-auto bg-gray-400 border-0 rounded" />
              </div>
              <div id="keywords" className="row-span-3">
                {project.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className={`inline-block bg-gradient-to-br ${themeStyles[theme].experienceGradient} rounded-full px-3 py-1 lg:text-lg md:text-sm sm:text-xs font-semibold text-white/75 mr-2 mb-2`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
