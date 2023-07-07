import { IGlassesSelected } from '../../../types'
import { FC } from 'react'
import { Container, Points, Title, Image } from './style'

interface IProps {
    index: number
    glasses: IGlassesSelected
}

const Glasses: FC<IProps> = ({ index, glasses }) => {
    return (
        <Container>
            <Points>{glasses.points > 0 ? `${glasses.points} ponto${glasses.points > 1 ? 's' : ''}` : 'Nenhum ponto'}</Points>
            <Title>{index+1}° opção - {glasses.name}</Title>
            <Image placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=" fill src={glasses.image} alt={glasses.description}/>
        </Container>
    )
}

export default Glasses