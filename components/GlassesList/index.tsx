import { IGlassesSelected } from '../../types'
import { FC, useState } from 'react'
import { Container, List, Input } from './style'
import Glasses from './Glasses'

interface IProps {
    glasses: IGlassesSelected[] | undefined
}

const GlassesList: FC<IProps> = ({ glasses }) => {
    const [search, setSearch] = useState('')

    if (glasses) {
        return (
            <Container>
                <Input value={search} placeholder="Pesquisar..." name="search" onChange={ev => setSearch(ev.target.value)}/>
                <List>
                    {glasses.map((glasses, index) => {
                        if (glasses.name.toUpperCase().includes(search.toUpperCase())) {
                            return <Glasses key={index} index={index} glasses={glasses}/>
                        }
                    })}
                </List>
            </Container>
        )
    } else {
        return null
    }
}

export default GlassesList