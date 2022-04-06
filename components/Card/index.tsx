import { CardContainer, Title, Paragraph, ButtonsContainer, DetailsBtn, Price } from './styles'

export type CardProps = {
  isSpaced?: boolean
}

const Card: React.FC<CardProps> = ({ isSpaced = false }) => {
  return (
    <>
      <CardContainer>
        <Title>Nome da sala</Title>
        <Paragraph>
          Card layouts can vary to support the types of content they contain.
          The following elements are commonly found among that variety.
        </Paragraph>
        <ButtonsContainer>
          <DetailsBtn>Ver detalhes</DetailsBtn>
          <Price><img src="price-tag.svg" />R$ 20,00/dia</Price>
        </ButtonsContainer>
      </CardContainer>
    </>
  )
}

export default Card
