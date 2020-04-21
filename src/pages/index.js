import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
    return (
        <div>
            <h1>Hello</h1>
            <p>My name is Jamiesdsd</p>

            <p>Need a developer?<Link to="/contact">Contact ME</Link></p>
        </div>
    )
}

export default IndexPage