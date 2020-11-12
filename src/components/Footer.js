import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Container, Col, Row} from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid style={{marginTop: "3rem"}}>
      <Row>
        <Col className="d-none d-md-block" s={5} md={6} xl={9}> 
        <div className="hero-flight"></div>
        </Col>
        <Col className="footer" style={{mingHeight: "300px"}}>
      <a
        href="mailto:studio@jeroenkortekaas.com"
        target="_top"
        className="py-2"
        style={{fontSize: "1.25rem"}}
      >
        studio@jeroenkortekaas.com
      </a>
      <div className="mt-2 social">
        <a
          href="https://www.facebook.com/jeroen.kortekaas.77"
          target="_blank"
          rel="noopener noreferrer"
          className="light text-decoration-none pr-1"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            style={{ fontSize: "1rem" }}
            className="gray"

          />
        </a>
        <a
          href="https://www.instagram.com/vrievries/"
          target="_blank"
          rel="noopener noreferrer"
          className="light text-decoration-none p-1"
        >
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            style={{ fontSize: "1rem" }}
            className="gray"
          />
        </a>
        <a
          href="mailto:studio@jeroenkortekaas.com"
          target="_blank"
          rel="noopener noreferrer"
          className="light text-decoration-none p-1"
        >
          <FontAwesomeIcon
            icon={["fas", "at"]}
            style={{ fontSize: "1rem" }}
            className="gray"
          />
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Jeroen Kortekaas, All rights reserved
      </div>
      
      </Col>
      </Row>
    </Container>
  )
}

export default Footer
