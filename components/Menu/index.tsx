import { Col, Row } from 'react-bootstrap'
import * as S from './styles'
import DashIcon from '../../public/Home'
import BookIcon from '../../public/Bookmarked'
import UserIcon from '../../public/User'
import AddIcon from '../../public/Add'

import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'

const Menu: React.FC = () => {
  const router = useRouter()
  const theme = useTheme()
  return (
    <S.Wrapper>
      <Row lg="auto">
        <Col lg="auto">
          <DashIcon
            color={
              router.pathname === '/Dashboard' ? theme.colors.blue : undefined
            }
          />
        </Col>
        <Col>
          <p
            style={
              router.pathname === '/Dashboard'
                ? { color: theme.colors.blue }
                : undefined
            }
          >
            Dashboard
          </p>
        </Col>
      </Row>
      <Row lg="auto">
        <Col lg="auto">
          <BookIcon
            color={
              router.pathname === '/Bookmarked' ? theme.colors.blue : undefined
            }
          />
        </Col>
        <Col>
          <p
            style={
              router.pathname === '/Bookmarked'
                ? { color: theme.colors.blue }
                : undefined
            }
          >
            Bookmarked
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg="auto">
          <UserIcon
            color={router.pathname === '/Users' ? theme.colors.blue : undefined}
          />
        </Col>
        <Col>
          <p
            style={
              router.pathname === '/Users'
                ? { color: theme.colors.blue }
                : undefined
            }
          >
            Usuários
          </p>
        </Col>
      </Row>
      <Row className="addicon">
        <AddIcon
          color={router.pathname === '/Rooms' ? theme.colors.blue : undefined}
        />
        <p
          style={
            router.pathname === '/Rooms'
              ? { color: theme.colors.blue }
              : undefined
          }
        >
          Cadastrar sala
        </p>
      </Row>
    </S.Wrapper>
  )
}

export default Menu
