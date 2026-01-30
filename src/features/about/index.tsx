"use client";
import { ReactElement, useState } from "react";
import { Button } from "@/components/button";
import SkillList from "./components/skill-list";
import EducationList from "./components/education-list";

export function AboutSection(): ReactElement {
  const [activeTab, setActiveTab] = useState("skills");
  const sectionContent = {
    introParagraph: `I am a full-stack software engineer currently working with TypeScript.
        I've accumulated other technical skills such as Java and Python through my academic journey.
        On my free time, I try to gain additional experience by working on personal projects or practicing my DSA skills.`,
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
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-2/3">
          <h1 className="text-white">{"Hello, I'm Randy"}</h1>
          <p>{sectionContent.introParagraph}</p>
        </div>
        <div className="flex flex-col w-1/3">
          <div className="flex gap-4">
            {tabsOption.map((option, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setActiveTab(option);
                  }}
                  label={option.toUpperCase()}
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
      </div>
    </section>
  );
}
