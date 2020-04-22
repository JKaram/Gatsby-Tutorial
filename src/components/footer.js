import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`)
    return (
        <footer>
            <p>Copyright {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Footer