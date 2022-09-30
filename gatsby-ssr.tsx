import React from 'react'
import type {GatsbySSR} from 'gatsby'
import './src/assets/external-styles/main.scss'
import Layout from './src/components/Layout/Layout'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({element}) => (
  <Layout>{element}</Layout>
)
