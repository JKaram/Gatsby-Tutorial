import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'


const About = () => {
    return (
        <Layout>
            <h1>ABout page</h1>
            <p>This is a about page</p>
            <Link to="/contact">Contact Me</Link>
        </Layout>
    )
}

export default About