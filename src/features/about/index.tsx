"use client";
import { ReactElement, useState } from "react";
import { Button } from "@/components/button";
import SkillList from "./components/skill-list";
import EducationList from "./components/education-list";

export function AboutSection(): ReactElement {
  const [activeTab, setActiveTab] = useState("skills");
  const sectionContent = {
    introParagraph: `I am a full stack software engineer in the insurance industry, where I primarily work with TypeScript across both the frontend and backend. I build reusable, scalable UI components with React and develop robust services using NestJS, while keeping a close eye on performance and reliability through tools like Datadog. My data stack experience includes PostgreSQL for transactional workloads and Snowflake for analytics. I got my foundations in Java and Python during my academic journey, which shaped how I think about software design and problem solving. Outside of work, I enjoy building personal projects and sharpening my data structures and algorithms skills to keep my fundamentals strong and my thinking sharp.`,
    skills: [
      "Java",
      "Python",
      "Typescript",
      "SQL",
      "React",
      "Node.js",
      "Express",
      "Nest.js",
      "PostgreSQL",
      "Hightouch",
      "Datadog",
      "Snowflake",
    ],
    educations: [
      {
        school: "Northeastern University",
        degree: "M.S in Computer Science",
        startDate: "January 2020",
        endDate: "December 2021",
      },
      {
        school: "University of Washington",
        degree: "B.S in Electrical Engineering",
        startDate: "September 2014",
        endDate: "December 2016",
      },
    ],
  };
  const tabsOption = ["skills", "educations"];
  return (
    <section id="about-section">
      <h1 className="text-white my-2 text-lg font-bold">About Me</h1>
      <div className="flex flex-col gap-4">
        <p>{sectionContent.introParagraph}</p>
        <div className="flex gap-4">
          {tabsOption.map((option, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  setActiveTab(option);
                }}
                label={option.toUpperCase()}
                isActive={activeTab === option}
              />
            );
          })}
        </div>
        {activeTab === "skills" ? (
          <SkillList skills={sectionContent.skills} />
        ) : (
          <EducationList educations={sectionContent.educations} />
        )}
      </div>
    </section>
  );
}
