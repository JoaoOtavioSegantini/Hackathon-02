import * as S from './styles'

type Props = {
  children: React.ReactNode
}

const LoggedInUser = ({ children }: Props) => {
  return <S.UserNameText>{children}</S.UserNameText>
}

export default LoggedInUser
