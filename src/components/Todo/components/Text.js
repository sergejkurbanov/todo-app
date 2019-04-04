import styled, { css } from 'styled-components'

export default styled.span`
  text-align: left;
  margin-top: -0.3rem;
  padding: 0.8rem 0;

  ${props =>
    props.isCompleted &&
    css`
      color: ${props => props.theme['color-gray']};
      text-decoration: line-through;
    `};
`
