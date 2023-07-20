import { useRouter } from 'next/router'
import useGlasses from '../../services/useGlasses'
import Head from 'next/head'
import { Container, Title } from '../../styles/pages/glasses'

interface IQuery {
    id: string
}

function Glasses() {
    const { id } = useRouter().query as unknown as IQuery
    const glasses = useGlasses(id)

    return <>
        <Head>
            <title>Ótica MVP</title>
        </Head>
        {glasses && (
            <Container>
                <Title>{glasses.name}</Title>
            </Container>  
        )}
    </>
}

export default Glasses