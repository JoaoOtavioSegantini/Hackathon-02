import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 63px;
    height: 73.37px;
  `,

  normal: () => css`
    width: 15rem;
    height: 7.3rem;
  `,

  large: () => css`
    width: 25rem;
    height: 10.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;
      svg {
        height: 4.5rem;
        pointer-events: none;
      }
      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.img<LogoProps>`
  ${({ size, hideOnMobile }) => css`
    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
