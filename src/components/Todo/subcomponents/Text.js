import styled, { css } from 'styled-components'

export default styled.span`
  margin-top: -0.2rem;
  padding: 0.5rem 0;

  ${props =>
    props.isCompleted &&
    css`
      color: ${props => props.theme['color-gray']};
      text-decoration: line-through;
    `};
`
