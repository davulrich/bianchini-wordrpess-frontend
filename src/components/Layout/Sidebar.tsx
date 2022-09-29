import React from 'react'
import styled from 'styled-components'

import FBIcon from './fb-icon.svg'
import InstagramIcon from './instagram-icon.svg'

const StyledSidebar = styled.aside`
  height: calc(100vh - var(--header-height));
  grid-column: 1 / 1;
  grid-row: 2 / -1;
  position: sticky;
  top: var(--header-height);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

const SocialIcons = styled.div`
  height: 7rem;
  border-top: 1px solid #ffffff36;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

const Sidebar: React.FC = () => (
  <StyledSidebar>
    <Title>
      <span>{'<< Page Tittle >>'}</span>
    </Title>
    <SocialIcons>
      <a
        href="https://www.facebook.com/katerina.bianchini"
        target="_blank"
        rel="noreferrer"
      >
        <FBIcon />
      </a>
      <a
        href="https://www.instagram.com/bianchini.cz/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>
    </SocialIcons>
  </StyledSidebar>
)

export default Sidebar
