import React from 'react'
import type {GatsbyBrowser} from 'gatsby'
import './src/assets/external-styles/main.scss'
import Layout from './src/components/Layout/Layout'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => <Layout>{element}</Layout>
