import React, { useEffect, useState } from "react"
import Section from "../components/Section"

import { FaGithub, FaLinkedinIn} from "react-icons/fa"

import SocialLink from "../utils/SocialLink"
import social from "./../constant/social.json"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}


/* Gets object of SocialLink */
const getSocialLinks = () => {
  const icons = [];
  icons.push(new SocialLink(<FaLinkedinIn/>, social.linkedin));
  icons.push(new SocialLink(<FaGithub/>, social.github));
  

  return icons;
}

export default function Home() {
  const [socialLinks, setSocialLinks] = useState([]);  

  useEffect(()=> {
    setSocialLinks(getSocialLinks());
  }, [])

  return (
    <Section id="about">
      <h1 className="mb-0">
        Dipanwita<span/>
        <span className="text-primary"> Das</span>
      </h1>
      <div className="subheading mb-3">

        <a href="mailto:dipanwita3018@gmail.com">
        dipanwita3018@gmail.com
        </a>
      </div>
      <p className="lead mb-4">
      
        I am a <strong> B.Tech Computer Science </strong> graduate with a passion for software development. I specialize in creating visually appealing and user-friendly web applications, with a solid understanding of both frontend and backend development. I am eager to learn new technologies and contribute to a fast-paced environment.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5"
          type="submit"
          onClick={() => window.open("https://drive.google.com/file/d/1ZHi3KyOUJFkrCQPAnfN08X491pthwXbG/view?usp=sharing", "_blank")}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {socialLinks.map(({ link, icon }, index) => (
          <SocialIcon href={link} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
