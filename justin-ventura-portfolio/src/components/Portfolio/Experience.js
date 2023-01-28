import React from "react";
import { AiFillCalendar, AiFillEnvironment } from "react-icons/ai";

// Import all logos from assets/orgLogos folder:
import amazonLogo from "../../assets/orgLogos/amazonLogo.jpg";
import amazonTransparent from "../../assets/orgLogos/amazonTransparent.jpg";
import awsLogo from "../../assets/orgLogos/awsLogo.jpg";
import cmuLogo from "../../assets/orgLogos/cmuLogo.jpg";
import cmuTransparent from "../../assets/orgLogos/cmuTransparent.jpg";
import googleTransparent from "../../assets/orgLogos/googleTransparent.jpg";
import harvardLogo from "../../assets/orgLogos/harvardLogo.jpg";
import hensonLogo from "../../assets/orgLogos/hensonLogo.jpg";
import metaTransparent from "../../assets/orgLogos/metaTransparent.jpg";
import mitLogo from "../../assets/orgLogos/mitLogo.jpg";
import suLogo from "../../assets/orgLogos/suLogo.jpg";
import umdLogo from "../../assets/orgLogos/umdLogo.jpg";
import umdTransparent from "../../assets/orgLogos/umdTransparent.jpg";

const experiences = [
  {
    id: 1,
    title: "Software Engineering Intern",
    org: "Amazon (AWS)",
    imageUrl: awsLogo,
    location: "Arlington, VA",
    dates: "September 2022 - December 2022",
    description:
      "Created Code Search page for AWS Region Build Informer team enabling TPMs to search for code changes across AWS Region Services, particularly with dependencies, that may have caused a region launch delay without having to manually navigate the region build dependency graph.  This internal tool was created in response to a recent region launch delay.",
    tech: [
      "AWS",
      "AuroraDB",
      "Lambda",
      "S3",
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "PostgreSQL",
    ],
    keywords: [
      "Web Development",
      "Cloud Computing",
      "Backend Development",
      "Frontend Development",
    ].sort(),
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    org: "Amazon",
    imageUrl: amazonLogo,
    location: "Seattle, WA",
    dates: "May 2022 - August 2022",
    description:
      "Researched Payments Intelligence ML Team's models in order to design and implement a customized and serverless retraining pipeline for the team's Data Scienctists to use.  This pipeline reduces data scientists efforts by nearly 70%, and provides them with retraining triggered by data drift, new training data, manual trigger, and an update to the model's code base.",
    tech: [
      "AWS",
      "CDK",
      "TypeScript",
      "Lambda",
      "S3",
      "SageMaker",
      "SNS",
      "Python",
    ],
    keywords: [
      "Machine Learning",
      "Cloud Computing",
      "MLOps",
      "Research",
    ].sort(),
  },
  {
    id: 3,
    title: "Software Research Intern",
    org: "Carnegie Mellon University",
    imageUrl: cmuLogo,
    location: "Pittsburgh, PA",
    dates: "May 2021 - May 2022",
    description:
      "Researched and created heuristics for collecting/filtering ML-enabled open-source software (OSS) projects.  Wrote python scripts to collect repositories 90% more efficiently over manually in order to perform analysis on the repositories.  Presented the results to 400+ peer researchers and faculty.",
    tech: ["Python", "GitHub API", "Bash", "LaTeX"],
    keywords: [
      "Machine Learning",
      "Data Collection/Analysis",
      "Research",
      "Scripting",
    ].sort(),
  },
  {
    id: 4,
    title: "Teaching Assistant",
    org: "Salisbury University",
    imageUrl: suLogo,
    location: "Salisbury, MD",
    dates: "January 2019 - May 2022",
    description:
      "TA for Calculus I, Intro Java, Intro C++, Data Structures & Algorithms.  Tutored nearly all levels of Computer Science & Mathematics courses.  Hosted 6 office hours, and 8 discussion/tutoring sessions weekly.",
    tech: ["Java", "C++", "Python", "C", "Jupyter Lab", "JavaScript", "LaTeX"],
    keywords: [
      "Teaching",
      "Tutoring",
      "Leadership",
      "Mentorship",
      "Communication",
    ].sort(),
  },
  {
    id: 5,
    title: "Machine Learning and Web Development Researcher",
    org: "Henson School of Science & Technology",
    imageUrl: hensonLogo,
    location: "Salisbury, MD",
    dates: "August 2019 - May 2022",
    description:
      "Project 1: Researched decision trees and recurrent neural networks in order to create AI bots for our custom agar.io-like game.  Project 2: Worked on web app survery and data analysis for psychology department in their social identity mapping research project.  Project 3: Created small but scalable genetic algorithm to optimize the parameters of a multidimensional system.",
    tech: ["JavaScript", "Python", "HTML", "CSS", "Node.js"],
    keywords: ["Machine Learning", "Web Development", "Research"].sort(),
  },
];

const Experience = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1">
        <div className="col-span-1 text-center">
          <h1 className="text-6xl my-10">My Work Experience.</h1>
        </div>
        {experiences.map((experience) => (
          <div className="col-span-1 bg-theme/50 rounded-2xl grid grid-cols-3 md:grid-cols-1 m-6">
            <div className="col-span-1 flex items-center justify-center">
              <img
                src={experience.imageUrl}
                className="rounded-2xl h-96 w-96 lg:h-72 lg:w-72 md:mx-auto my-3 justify-center"
              ></img>
            </div>
            <div className="mx-4 col-span-2 grid-rows-3">
              <h1
                className={`text-2xl m-6 text-center hover:text-${
                  experience.id % 2 === 0 ? "orange" : "purple"
                }-400 duration-300`}
              >
                {experience.title + " at " + experience.org}
              </h1>
              <hr className="w-48 h-1 mx-auto mb-8 bg-gray-400 border-0 rounded md:hidden" />
              <div className="md:hidden grid-cols-2">
                <p className="col-span-1 text-center m-4">
                  <AiFillEnvironment className="inline-block mx-2" />
                  {experience.location}
                  <AiFillCalendar className="inline-block mx-2" />
                  {experience.dates}
                </p>
                <p className="col-span-1 mb-10 mt-4">
                  {experience.description}
                </p>
              </div>
              <div className="row-span-1 text-center md:hidden">
                {experience.tech.map((technology) => (
                  <span
                    className={`inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white/50 mr-2 mb-2`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="row-span-1 text-center">
                {experience.keywords.map((keyword) => (
                  <span
                    className={`inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white/50 mr-2 mb-2`}
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

export default Experience;
