import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeaderProps } from '.'

const wrapperModifiers = {
  between: () => css`
    justify-content: space-between;
  `,

  around: () => css`
    justify-content: space-around;
  `
}

export const HeaderContainer = styled.div<HeaderProps>`
  ${({ theme, isSpaced }) => css`
  position: relative;
    .text-logo {
      margin-left: 95px;
      font-style: normal;
      font-weight: 600;
      font-size: 35px;
      line-height: 42px;
      color: #9701f0;
      position: absolute;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 45px;
    background-color: ${theme.colors.navbar};
    ${media.greaterThan('medium')`
    ${isSpaced ? wrapperModifiers.around : wrapperModifiers.between}
    `}
    ${media.lessThan('medium')`
      padding: 0px 15px;
    `}
  `}
`
