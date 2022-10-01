import {graphql} from 'gatsby'
import {Trans} from 'gatsby-plugin-react-i18next'

const IndexPage = () => (
  <div>
    <Trans>Domu</Trans>
  </div>
)

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {ns: {in: ["index"]}, language: {eq: $language}}
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
