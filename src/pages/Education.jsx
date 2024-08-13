import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-1">B.P. Poddar Institute of Management and Technology <span>, Kolkata</span></h3>
          <div className="subheading mb-2">Bachelor of Technology in Computer Science Engineering</div>
          <div className="mb-2">CGPA: 8.91</div>
          <p className="mb-0">
            Relevant Coursework: JAVA, DBMS, OOPs, Computer Networks, Data Structures & Algorithms, Cryptography, Cloud Computing, Operating Systems
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">August 2020 - July 2024</span>
        </div>
      </div>
    </Section>
  );
}
