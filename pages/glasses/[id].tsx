import { useRouter } from 'next/router'
import useGlasses from '../../services/useGlasses'
import Head from 'next/head'
import { Container, Title, Image } from '../../styles/pages/glasses'
import ButtonBack from '../../components/ButtonBack'
import blurData from '../../utils/blurData'

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
                <ButtonBack back="/"/>
                <Title>{glasses.name}</Title>
                <Image
                    fill
                    placeholder="blur"
                    src={glasses.image}
                    blurDataURL={blurData}
                    alt={glasses.description}
                />
            </Container>
        )}
    </>
}

export default Glasses