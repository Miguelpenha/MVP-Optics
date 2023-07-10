import { IGlassesSelected } from '../../../types'
import { FC } from 'react'
import processPoints from './processPoints'
import processTitle from './processTitle'
import { Container, Points, Title, Image } from './style'
import blurData from '../../../utils/blurData'

interface IProps {
    index: number
    glasses: IGlassesSelected
}

const Glasses: FC<IProps> = ({ index, glasses }) => {
    const points = processPoints(glasses)
    const title = processTitle(index, glasses)

    return (
        <Container>
            <Points>{points}</Points>
            <Title>{title}</Title>
            <Image
                fill
                placeholder="blur"
                src={glasses.image}
                blurDataURL={blurData}
                alt={glasses.description}
            />
        </Container>
    )
}

export default Glasses