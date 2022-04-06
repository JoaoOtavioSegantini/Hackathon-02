import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 473px;
    height: 56px;
    background: ${theme.colors.menu};
    border-radius: 8px 8px 0px 0px;
    margin: 100px auto 0 auto;
    display: flex;
    justify-content: space-around;

    .addicon > svg {
      margin-top: -2px;
      margin-bottom: -12px;
    }

    svg {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 8px;
      cursor: pointer;
    }
  `}
`
