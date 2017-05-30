import React from 'react'
import { string } from 'prop-types'
import Buffer from '../balanc3-components/buffer'
import StyledLink from '../balanc3-components/styled-link'
import styled from 'styled-components'
import { Input, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const Section = styled('div')`
  backgroundColor: ${({ theme, color }) => color ? theme[color] : theme.white};
  padding: 40px 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.small}) {
    padding: 60px 30px;
  }
`

const TopSection = styled(Section)`
max-width: 500px;
margin: 0 auto;
 @media (min-width: ${({ theme }) => theme.small}) {
    min-height: 500px;
  }
`

const SectionHeader = styled('h2')`
  text-align: center;
  margin-bottom: 0px;
`

const ListItem = ({ to, label }) => (
  <li>
    <StyledLink to={to}>{label}</StyledLink>
  </li>
)

ListItem.propTypes = {
  to: string,
  label: string
}

export default withRouter(({ history }) => (
  <div>
    <TopSection>
      <Buffer>
        <SectionHeader style={{ marginBottom: '20px' }}>Token Sale Manager</SectionHeader>
        <p>Your easy cryptocurrency token sale guide and tax reporting tool.  Enter the address you'd like reporting on and let's get this ball rolling</p>
        <Input
          fluid
          action={{ content: 'Get Started', color: 'green', onClick: (e) => { history.push(`previewTx/${e.target.previousSibling.value}`)  } }}
          placeholder="Your Ether Address"
        />
      </Buffer>
    </TopSection>
    <Section color="lighterGray">
      <SectionHeader>What We Offer</SectionHeader>
      <Divider style={{ width: '100px' }}/>
      <p> Think of us as the "Easy Button" for cryptocurrency compliance and book keeping </p>
      <div />
    </Section>
    <Section>
      <SectionHeader>Analytic Tools</SectionHeader>
      <Divider style={{ width: '100px' }}/>
      <p> We give you just what you want, vizually</p>
      <div />
    </Section>
  </div>
))
