import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
            
                     }
                 }
             }
        }  
    `)
    
    console.log(data.allMarkdownRemark.edges);
    

    return (
        <Layout>
            <h1>Blog Posts</h1>
            <ol>
                {
                    data.allMarkdownRemark.edges.map(element => {
                        return (
                            <li>
                                <h1>{element.node.frontmatter.title}</h1>
                                <p>{element.node.frontmatter.date}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
};

export default Blog