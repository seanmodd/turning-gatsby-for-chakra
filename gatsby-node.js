/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        products: allStrapiProduct {
          edges {
            node {
              name
              strapiId
              description
              category {
                name
              }
              variants {
                id
                color
                size
                style
                price
                images {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              name
              description
              filterOptions {
                Size {
                  checked
                  label
                }
                Style {
                  checked
                  label
                }
                Color {
                  checked
                  label
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const products = result.data.products.edges
  const categories = result.data.categories.edges

  products.forEach(product => {
    createPage({
      path: `/${product.node.category.name.toLowerCase()}/${product.node.name
        .split(' ')[0]
        .toLowerCase()}`,
      component: require.resolve('./src/templates/ProductDetail.js'),
      context: {
        name: product.node.name,
        id: product.node.strapiId,
        category: product.node.category.name,
        description: product.node.description,
        variants: product.node.variants,
        product,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/${category.node.name.toLowerCase()}`,
      component: require.resolve('./src/templates/ProductList.js'),
      context: {
        name: category.node.name,
        description: category.node.description,
        id: category.node.strapiId,
        filterOptions: category.node.filterOptions,
      },
    })
  })
}

// exports.modifyBabelrc = ({ babelrc }) => ({
//   ...babelrc,
//   plugins: babelrc.plugins.concat(['transform-regenerator']),
// })

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [{ test: /react-spring-3d-carousel/, use: loaders.null() }],
      },
    })
  }
}
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [{ test: /react-spring-3d-carousel/, use: loaders.null() }],
//       },
//       plugins: [
//         // fix "process is not defined" error:
//         // (do "npm install process" before running the build)
//         new webpack.ProvidePlugin({
//           process: 'process/browser',
//         }),
//       ],
//     })
//   }
// }

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }

// exports.onCreateNode = ({ node, actions, reporter }) => {
//   const { createNodeField } = actions

//   reporter.info(`>>>>${node.internal.type}`)
//   if (node.internal.type === 'StrapiProduct') {
//     const slug = `/${node.category.name.toLowerCase()}/${
//       node.name.split(' ')[0]
//     }`

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }
