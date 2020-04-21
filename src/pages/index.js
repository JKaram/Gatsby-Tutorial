import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

const IndexPage = () => {
    return (
    
            <Layout>
                <h1>Hello</h1>
                <p>My name is Jamiesdsd</p>
                <p>Need a developer?<Link to="/contact">Contact ME</Link></p>
            </Layout>
       
    )
}

export default IndexPage