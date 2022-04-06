import * as S from "./styles";

export type LogoProps = {
  size?: "normal" | "large" | "small";
  hideOnMobile?: boolean;
};

const Logo = ({ size = "normal", hideOnMobile = false}: LogoProps) => (
  <S.Wrapper
    size={size}
    hideOnMobile={hideOnMobile}
    src="/logo-nav.svg"
    alt="Agende-se"
  ></S.Wrapper>
);

export default Logo;
