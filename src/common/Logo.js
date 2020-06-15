import React from "react"
import Lottie from "lottie-react-web"
// import animation from "./oscillator.json";
import animation from "./Logo.json"

const Logo = () => (
  <Lottie
    style={{ width: "160px", height: "160px", margin: "auto" }}
    options={{ animationData: animation, loop: false }}
    alt="Loading ..."
  />
)

export default Logo
