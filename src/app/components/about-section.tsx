"use client";
import { ReactElement, useState } from "react";
import { Button } from "./button";

/**
 * Intro
 * Skills
 * Educations
 * @constructor
 */
function AboutSection(): ReactElement {
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
    <section>
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
            <AboutSkillsList skills={sectionContent.skills} />
          ) : (
            <AboutEducationsList educations={sectionContent.educations} />
          )}
        </div>
      </div>
    </section>
  );
}

interface AboutSkillsListProps {
  skills: any[];
}

function AboutSkillsList({ skills }: AboutSkillsListProps): ReactElement {
  return (
    <ul className="list-disc pl-2">
      {skills.map((skill, index) => {
        return <li key={index}>{skill}</li>;
      })}
    </ul>
  );
}

interface AboutEducationsProps {
  educations: any[];
}

function AboutEducationsList({
  educations,
}: AboutEducationsProps): ReactElement {
  return (
    <ul className="list-disc pl-2">
      {educations.map((education, index) => {
        return (
          <li key={index}>
            {education.school} - {education.degree}
          </li>
        );
      })}
    </ul>
  );
}

export default AboutSection;
