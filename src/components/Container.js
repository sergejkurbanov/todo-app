import styled from 'styled-components'
import { Box } from '@rebass/grid'

const Container = styled(Box)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.maxWidth || 'none'};

  @media only screen and (min-width: ${props => props.theme['screen-xs']}) {
    width: 540px;
  }
  @media only screen and (min-width: ${props => props.theme['screen-sm']}) {
    width: 720px;
  }
  @media only screen and (min-width: ${props => props.theme['screen-md']}) {
    width: 960px;
  }
  @media only screen and (min-width: ${props => props.theme['screen-lg']}) {
    width: 1140px;
  }
`

export default Container
