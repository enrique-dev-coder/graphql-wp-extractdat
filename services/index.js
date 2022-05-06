import { request, gql } from 'graphql-request'

const graphQLAPI = process.env.WORDPRESS_GRAPHQL_ENDPOINT

export const getPostsData = async () => {
  const query = gql`
    query datosdePosts {
      posts {
        edges {
          node {
            date
            excerpt
            featuredImage {
              node {
                altText
                uri
              }
            }
            uri
            link
            title
          }
        }
      }
    }
  `
  const result = await request(graphQLAPI, query)
  //me da el array de datos
  return result.posts.edges
}
