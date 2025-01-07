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
    introParagraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
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
      <div className="flex flex-row p-8 gap-4">
        <div className="flex flex-col w-2/3">
          <h1 className="text-white">{"Hello, I'm Randy"}</h1>
          <p>{sectionContent.introParagraph}</p>
        </div>
        <div className="flex flex-col w-1/3">
          <div className="flex gap-2">
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
