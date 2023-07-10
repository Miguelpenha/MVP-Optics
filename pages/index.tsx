import { useState } from 'react'
import { IQuestions } from '../types'
import useEvaluateGlasses from '../components/useEvaluateGlasses'
import Head from 'next/head'
import { Container, Title } from '../styles/pages'
import FormQuestions from '../components/Form'
import GlassesList from '../components/GlassesList'

function Home() {
    const [shape, setShape] = useState<IQuestions['shape']>()
    const [veryScreenTime, setVeryScreenTime] = useState<boolean>()
    const [idealPrice, setIdealPrice] = useState('')
    const [verySunnyPlaces, setVerySunnyPlaces] = useState<boolean>()
    const glasses = useEvaluateGlasses({ idealPrice, shape, veryScreenTime, verySunnyPlaces })

    return <>
        <Head>
            <title>Ótica MVP</title>
        </Head>
        <Container>
            <Title>Faça uma avaliação</Title>
            <FormQuestions
                shape={shape}
                setShape={setShape}
                setIdealPrice={setIdealPrice}
                veryScreenTime={veryScreenTime}
                verySunnyPlaces={verySunnyPlaces}
                setVeryScreenTime={setVeryScreenTime}
                setVerySunnyPlaces={setVerySunnyPlaces}
            />
            <GlassesList glasses={glasses}/>
        </Container>
    </>
}

export default Home