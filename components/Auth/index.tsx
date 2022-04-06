import Fields from 'components/Fields'
import LoginBtn from 'components/LoginBtn'
import { useState } from 'react'
import { Row } from 'react-bootstrap'
import * as S from './styles'

export const EmailPassword = (
  hideEmail: boolean = false,
  hidePassword: boolean = false,
  isEmailRequired: boolean,
  isPassRequired: boolean
) => ({
  email: {
    helperText: 'invalid email',
    placeholder: 'Insira seu email',
    type: 'email',
    hidden: hideEmail,
    label: 'Email',
    required: true
  },
  password: {
    helperText:
      'your password must be at least eight characters and include one uppercase letter, one number, and one special character',
    placeholder: 'Insira sua senha',
    type: 'password',
    hidden: hidePassword,
    label: 'Senha',
    required: true
  }
})

const Auth = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmation: ''
  })
  const [isSignup, setIsSignup] = useState(false)
  const commom = EmailPassword(false, false, false, false)

  const { password, email } = EmailPassword(false, false, false, false)

  const newFields = {
    name: {
      helperText: 'you must enter a name',
      placeholder: 'Insira nome de usuário',
      label: 'Usuário'
    },
    email,
    password,
    confirmation: {
      ...password,
      placeholder: 'Confirme sua senha',
      label: 'Confirmar Senha'
    }
  }

  const fields = isSignup ? newFields : commom

  return (
    <>
      <S.LogoContainer>
        <S.Logo /> <S.LogoText>Agende-se</S.LogoText>
      </S.LogoContainer>
      <S.Wrapper>
        <S.TextContainer>
          <p>Bem vindo de volta</p>
          <p>Faça login para continuar no Agende-se</p>
        </S.TextContainer>
        <S.FieldsContainer>
          <form>
            <Row>
              <Fields
                values={values}
                setValues={setValues}
                disabled={false}
                fields={fields}
              />
              <LoginBtn />
              <p
                onClick={() => {
                  setIsSignup(!isSignup)
                }}
              >
                Já tenho uma conta
              </p>
            </Row>
          </form>
        </S.FieldsContainer>
      </S.Wrapper>
    </>
  )
}

export default Auth
