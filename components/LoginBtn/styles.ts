import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.primary};
    border-radius: 40px;
    box-shadow: 0 14px 28px rgba(206, 206, 206, 0.25),
      0 10px 10px rgba(214, 213, 213, 0.22);
    display: flex;
    height: 50px;
    justify-content: center;
    position: relative;
    width: 482px;
    max-width: 70%;
    margin: 35px auto;
    cursor: pointer;

    .text {
      color: ${theme.colors.white};
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      position: absolute;
      transition: opacity 300ms;
      user-select: none;
      -moz-user-select: none;
    }
    .fingerprint {
      left: -8px;
      opacity: 0;
      position: absolute;
      stroke: rgb(221, 221, 221);
      top: -9px;
      transition: opacity 1ms;
    }
    .fingerprint-active {
      stroke: rgb(0, 0, 0);
    }
    .fingerprint-out {
      opacity: 1;
    }
    .odd {
      stroke-dasharray: 0px 50px;
      stroke-dashoffset: 1px;
      transition: stroke-dasharray 1ms;
    }
    .even {
      stroke-dasharray: 50px 50px;
      stroke-dashoffset: -41px;
      transition: stroke-dashoffset 1ms;
    }
    .ok {
      opacity: 0;
    }
    &.active {
      animation: 6s Container;
      height: 75px;
    }
    &.active .text {
      opacity: 0;
      animation: 6s Text forwards;
    }
    &.active .fingerprint {
      opacity: 1;
      transition: opacity 300ms 200ms;
    }
    &.active .fingerprint-base .odd {
      stroke-dasharray: 50px 50px;
      transition: stroke-dasharray 800ms 100ms;
    }
    &.active .fingerprint-base .even {
      stroke-dashoffset: 0px;
      transition: stroke-dashoffset 800ms;
    }
    &.active .fingerprint-active .odd {
      stroke-dasharray: 50px 50px;
      transition: stroke-dasharray 2000ms 1500ms;
    }
    &.active .fingerprint-active .even {
      stroke-dashoffset: 0px;
      transition: stroke-dashoffset 2000ms 1300ms;
    }
    &.active .fingerprint-out {
      opacity: 0;
      transition: opacity 300ms 4100ms;
    }
    &.active .ok {
      opacity: 1;
      animation: 6s Ok forwards;
    }
    @keyframes Container {
      0% {
        width: 482px;
      }
      6% {
        width: 80px;
      }
      71% {
        transform: scale(1);
      }
      75% {
        transform: scale(1.2);
      }
      77% {
        transform: scale(1);
      }

      94% {
        width: 80px;
      }
      100% {
        width: 482px;
      }
    }
    @keyframes Text {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      6% {
        opacity: 0;
        transform: scale(0.5);
      }

      94% {
        opacity: 0;
        transform: scale(0.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes Ok {
      0% {
        opacity: 0;
      }
      70% {
        opacity: 0;
        transform: scale(0);
      }
      75% {
        opacity: 1;
        transform: scale(1.1);
      }
      77% {
        opacity: 1;
        transform: scale(1);
      }
      92% {
        opacity: 1;
        transform: scale(1);
      }
      96% {
        opacity: 0;
        transform: scale(0.5);
      }
      100% {
        opacity: 0;
      }
    }
  `}
`
