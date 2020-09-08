const path = require('path')

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    let slugify = require('slugify')

    const result = await graphql(
      `
      {
        pages: allStrapiPage(sort: {fields: created_at}) {
          nodes {
            title
          }
        }
        upages: allStrapiUnlinkedPage(sort: {fields: created_at}) {
          nodes {
            title
          }
        }
      }
    `
    )
  
    if (result.errors) {
      throw result.errors
    }
  
    // Create pages.
    const pages = result.data.pages.nodes
    pages.forEach((page) => {
      createPage({
        path:`/pages/${slugify(page.title)}`,
        component: require.resolve("./src/templates/page-template.js"),
        context: {
          slug: page.title,
        },
      })
    })

    // Create standalone pages.
    const upages = result.data.upages.nodes
    upages.forEach((page) => {
      createPage({
        path:`/pages/${slugify(page.title)}`,
        component: require.resolve("./src/templates/u-page-template.js"),
        context: {
          slug: page.title,
        },
      })
    })
  }