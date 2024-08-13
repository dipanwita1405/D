import React, { useEffect } from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { useState } from "react"
import portfolios from "../constant/project.js";

const Project = () => {
  const [count, setCount] = useState(3)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(portfolios.slice(0, count))
  }, [count])

  return (
    <Section id="portfolio" title="Projects">
      <div className="cards">
        {items && items.map((card, index) => <Card card={card} key={index} />)}
      </div>

      <div className="d-flex justify-content-center">
        {count < portfolios.length && (
          <div
            className="btn btn-primary mt-5 btn-lg"
            onClick={() => setCount(count + 3)}
          >
            See more
          </div>
        )}
      </div>
    </Section>
  )
}

export default Project;
