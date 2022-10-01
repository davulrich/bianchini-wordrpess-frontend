import type {GatsbyConfig} from 'gatsby'
import * as dotenv from 'dotenv'
import {languages, defaultLanguage} from './languages'

dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: '',
    description: '',
    siteUrl: process.env.SITE_URL,
    image: 'src/assets/images/favicon.png',
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./gatsby-graphql.ts`,
        documentPaths: ['./src/**/*.{ts,tsx}', './gatsby-node.js'],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MWMVVLR',
        includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Starter',
        short_name: 'Starter',
        start_url: '/',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/assets/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages,
        defaultLanguage,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: process.env.SITE_URL,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        pages: [
          {
            matchPath: '/:lang?/:uid',
            getLanguageFromPath: true,
          },
        ],
      },
    },
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://wpgatsbydemo.wpengine.com/graphql`,
      },
    },
  ],
}

export default config
