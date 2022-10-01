/* eslint-disable unicorn/prefer-module */
import {readdirSync, lstatSync} from 'node:fs'

const localesPath = `${__dirname}/src/assets/locales`

export const defaultLanguage = 'en'

// based on the directories get the language codes without deafult language
const languagesWithoutDefault = readdirSync(localesPath).filter((fileName) => {
  const isDirectory = lstatSync(`${localesPath}/${fileName}`).isDirectory()
  const isNotDefaultLanguage = fileName !== defaultLanguage
  return isDirectory && isNotDefaultLanguage
})

// Add default language as first
export const languages = [defaultLanguage, ...languagesWithoutDefault]
