import { IGlassesSelected } from '../../../../types'
import { FC } from 'react'
import { Container, Detail } from './style'
import QRCode from './QRCode'

interface IProps {
    show: boolean | undefined
    glasses: IGlassesSelected
}

const Details: FC<IProps> = ({ show, glasses }) => {
    return (
        <Container show={show}>
            <Detail>Pontos: {glasses.points}</Detail>
            <Detail>Preço: {glasses.price}</Detail>
            <Detail>Tags: {glasses.tags.map((tag, index) => `${tag}${index==glasses.tags.length-1 ? '' : ', '}`)}</Detail>
            <Detail>Nome: {glasses.name}</Detail>
            <Detail>Marca: {glasses.brand}</Detail>
            <Detail>Descrição: {glasses.description}</Detail>
            <Detail>Filtro de luz Azul: {glasses.filterBlue ? 'Tem' : 'Não tem'}</Detail>
            <Detail>Proteção contra luz solar: {glasses.sunglasses ? 'Tem' : 'Não tem'}</Detail>
            <QRCode glasses={glasses}/>
        </Container>
    )
}

export default Details