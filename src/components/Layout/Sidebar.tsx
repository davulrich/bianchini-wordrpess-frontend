import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.aside`
  height: calc(100vh - var(--header-height));
  grid-column: 1 / 1;
  grid-row: 2 / -1;
  position: sticky;
  top: var(--header-height);

  background: var(--c-primary);
  color: var(--c-white);
`

const Title = styled.div`
  height: 24rem;
  border-bottom: 1px solid #ffffff36;
  position: relative;

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    line-height: 0;
    rotate: 270deg;
    translate: -50% 0;
    white-space: nowrap;
  }
`

const Sidebar: React.FC = () => (
  <StyledSidebar>
    <Title>
      <span>{'<< Page Tittle >>'}</span>
    </Title>
  </StyledSidebar>
)

export default Sidebar
