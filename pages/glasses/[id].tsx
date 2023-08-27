import { IGlasses } from '../../types'
import { FC } from 'react'
import Head from 'next/head'
import { Container, Title, ContainerImage, Image } from '../../styles/pages/glasses'
import ButtonBack from '../../components/ButtonBack'
import blurData from '../../utils/blurData'
import { GetServerSideProps } from 'next'
import useGlasses from '../../services/useGlasses'

interface IProps {
    glasses: IGlasses
}

const Glasses: FC<IProps> = ({ glasses }) => {
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
            <ContainerImage>
                <Image
                    fill
                    placeholder="blur"
                    src={glasses.image}
                    blurDataURL={blurData}
                    alt={glasses.description}
                />
            </ContainerImage>
        </Container>
    </>
}

export const getServerSideProps: GetServerSideProps<IProps> = async (req) => {
    const { id } = req.query
    const glasses: IGlasses = useGlasses(id as string)

    return { props: { glasses } }
}

export default Glasses