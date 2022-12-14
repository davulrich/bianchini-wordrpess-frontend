import React, {ReactNode} from 'react'
import styled from 'styled-components'
import SEO from '../SEO'
import Typography from '../../styles/Typography'
import GlobalStyle from '../../styles/GlobalStyle'
import Header from './Header'
import Sidebar from './Sidebar'

const StyledLayout = styled.div`
  --header-height: 4.375rem;
  --sidebar-width: 5rem;

  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  grid-template-rows: var(--header-height) 1fr;
`
interface Props {
  children: ReactNode
}
const Layout = ({children}: Props): JSX.Element => (
  <>
    <SEO />
    <Typography />
    <GlobalStyle />
    <StyledLayout>
      <Header />
      <main className="content">{children}</main>
      <Sidebar />
    </StyledLayout>
  </>
)

export default Layout
