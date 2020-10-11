import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="mailto:studio@jeroenkortekaas.com"
        target="_top"
        className="btn btn-outline-dark rounded-pill btn-md px-4 py-2"
      >
        studio@jeroenkortekaas.com
      </a>
      <div className="mt-2 social">
        <a
          href="https://www.facebook.com/jeroen.kortekaas.77"
          target="_blank"
          rel="noopener noreferrer"
          className="light text-decoration-none p-2"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            style={{ fontSize: "1.2rem" }}
          />
        </a>
        <a
          href="https://www.instagram.com/vrievries/"
          target="_blank"
          rel="noopener noreferrer"
          className="light text-decoration-none p-2"
        >
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            style={{ fontSize: "1.2rem" }}
          />
        </a>
        <a
          href="mailto:studio@jeroenkortekaas.com"
          target="_blank"
          rel="noopener noreferrer"
          className="light text-decoration-none p-2"
        >
          <FontAwesomeIcon
            icon={["fas", "at"]}
            style={{ fontSize: "1.2rem" }}
          />
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Jeroen Kortekaas, All rights reserved
      </div>
    </footer>
  )
}

export default Footer
