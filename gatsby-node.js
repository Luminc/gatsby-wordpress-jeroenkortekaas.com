/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const ProjectPageTemplate = path.resolve("./src/templates/ProjectPage.js")
  const PageTemplate = path.resolve("./src/templates/PageTemplate.js")

  const result = await graphql(`
    {
      allWordpressWpProjects {
        edges {
          node {
            wordpress_id
            slug
            title
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const ProjectPages = result.data.allWordpressWpProjects.edges
  ProjectPages.forEach(({ node }, index) => {
    createPage({
      path: `/project/${node.slug}`,
      component: ProjectPageTemplate,
      context: {
        id: node.wordpress_id,
        prev: index === 0 ? null : ProjectPages[index - 1].node,
        next:
          index === ProjectPages.length - 1
            ? null
            : ProjectPages[index + 1].node,
      },
    })
  })

  const Pages = result.data.allWordpressPage.edges
  Pages.forEach(page => {
    createPage({
      path: `/${page.node.slug}`,
      component: PageTemplate,
      context: {
        id: page.node.wordpress_id,
      },
    })
  })
}
