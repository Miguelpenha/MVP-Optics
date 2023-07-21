import { IGlassesSelected } from '../../../types'
import { FC, useState } from 'react'
import processPoints from './processPoints'
import processTitle from './processTitle'
import { Container, Points, Title, ImageGlasses } from './style'
import blurData from '../../../utils/blurData'
import Details from './Details'

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
            <ImageGlasses
                fill
                placeholder="blur"
                src={glasses.image}
                blurDataURL={blurData}
                alt={glasses.description}
            />
            <Details glasses={glasses} show={showDetails}/>
        </Container>
    )
}

export default Glasses