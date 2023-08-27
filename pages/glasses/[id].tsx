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

    if (glasses) {
        return <>
            <Head>
                <title>{glasses.name}</title>
                <meta property="og:title" content={glasses.name}/>
                <meta property="og:image" content={glasses.image}/>
                <meta name="description" content={glasses.description}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="og:description" content={glasses.description}/>
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}/glasses/${glasses.id}`}/>
            </Head>
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
        </>
    } else {
        return null
    }
}

export default Glasses