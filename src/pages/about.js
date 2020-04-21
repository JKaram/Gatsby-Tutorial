import React from "react"
import { Link } from "gatsby"


const About = () => {
    return (
        <div>
            <h1>ABout page</h1>
            <p>This is a about page</p>
            <Link to="/contact">Contact Me</Link>
        </div>
    )
}

export default About