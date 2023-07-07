import { IGlassesSelected } from '../../types'
import { FC } from 'react'
import { Container } from './style'
import Glasses from './Glasses'

interface IProps {
    glasses: IGlassesSelected[] | undefined
}

const GlassesList: FC<IProps> = ({ glasses }) => {
    if (glasses) {
        return (
            <Container>
                {glasses.map((glasses, index) => (
                    <Glasses key={index} index={index} glasses={glasses}/>
                ))}
            </Container>
        )
    } else {
        return null
    }
}

export default GlassesList