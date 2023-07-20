import { IGlassesSelected } from '../../../types'
import { FC, useState } from 'react'
import processPoints from './processPoints'
import processTitle from './processTitle'
import { Container, Points, Title, Image, Details, Detail } from './style'
import blurData from '../../../utils/blurData'

interface IProps {
    index: number
    glasses: IGlassesSelected
}

const Glasses: FC<IProps> = ({ index, glasses }) => {
    const points = processPoints(glasses)
    const title = processTitle(index, glasses)
    const [showDetails, setShowDetails] = useState<boolean | undefined>(undefined)

    return (
        <Container onClick={() => setShowDetails(!showDetails)}>
            <Points>{points}</Points>
            <Title>{title}</Title>
            <Image
                fill
                placeholder="blur"
                src={glasses.image}
                blurDataURL={blurData}
                alt={glasses.description}
            />
            <Details show={showDetails}>
                <Detail>Pontos: {glasses.points}</Detail>
                <Detail>Preço: {glasses.price}</Detail>
                <Detail>Tags: {glasses.tags.map((tag, index) => `${tag}${index==glasses.tags.length-1 ? '' : ', '}`)}</Detail>
                <Detail>Nome: {glasses.name}</Detail>
                <Detail>Marca: {glasses.brand}</Detail>
                <Detail>Descrição: {glasses.description}</Detail>
                <Detail>Filtro de luz Azul: {glasses.filterBlue ? 'Tem' : 'Não tem'}</Detail>
                <Detail>Proteção contra luz solar: {glasses.sunglasses ? 'Tem' : 'Não tem'}</Detail>
            </Details>
        </Container>
    )
}

export default Glasses