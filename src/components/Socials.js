import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Socials = () => {
  return (
    <div className="mt-2 social">
      <a
        href="https://www.instagram.com/vrievries/"
        target="_blank"
        rel="noopener noreferrer"
        className="light text-decoration-none p-2"
      >
        <FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
      <a
        href="https://www.facebook.com/zwadderich"
        target="_blank"
        rel="noopener noreferrer"
        className="light text-decoration-none p-2"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
      <a
        href="mailto:studio@esperanzadevries.com"
        target="_blank"
        rel="noopener noreferrer"
        className="light text-decoration-none p-2"
      >
        <FontAwesomeIcon icon={["fas", "broom"]} />
      </a>
    </div>
  )
}

export default Socials
