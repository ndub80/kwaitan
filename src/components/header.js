import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #333;
  margin-bottom: 1.45rem;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
`
const Header = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Title>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </Container>
  </Wrapper>
)

export default Header
