import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

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
                        fields {
                            slug
                        }
            
                     }
                 }
             }
        }  
    `)
        
    return (
        <Layout>
            <h1>Blog Posts</h1>
            <ol>
                {
                    data.allMarkdownRemark.edges.map(element => {
                        return (
                            <li>
                                <Link to={`/blog/${element.node.fields.slug}`}>
                                <h1>{element.node.frontmatter.title}</h1>
                                <p>{element.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
};

export default Blog