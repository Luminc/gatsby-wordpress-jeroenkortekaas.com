import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="mailto:studio@esperanzadevries.com"
        target="_top"
        className="btn btn-outline-dark rounded-pill btn-md px-4 py-2"
      >
        studio@esperanzadevries.com
      </a>
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
      <div className="copyright">
        &copy; {new Date().getFullYear()} Esperanza de Vries, All rights
        reserved
      </div>
    </footer>
  )
}

export default Footer
