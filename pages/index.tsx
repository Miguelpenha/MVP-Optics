import { useState } from 'react'
import { IQuestions } from '../types'
import useEvaluateGlasses from '../components/useEvaluateGlasses'
import Head from 'next/head'
import { Container, Title } from '../styles/pages'
import Button from '../components/Button'
import FormQuestions from '../components/Form'
import GlassesList from '../components/GlassesList'

function Home() {
    const [questions, setQuestions] = useState<IQuestions>()
    const [showGlasses, setShowGlasses] = useState<boolean>(false)
    const glasses = useEvaluateGlasses(showGlasses, questions)

    return <>
        <Head>
            <title>Ótica MVP</title>
            <meta property="og:title" content="Ótica MVP"/>
            <meta name="description" content="O MVP de uma ótica"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="og:description" content="O MVP de uma ótica"/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
        </Head>
        <Container>
            <Title showGlasses={showGlasses}>{showGlasses ? 'As melhores opções baseada nas respostas' : 'Faça uma avaliação'}</Title>
            {showGlasses && (
                <Button title="Refazer" onClick={() => location.reload()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                    </svg>
                </Button>
            )}
            <FormQuestions setQuestions={setQuestions} onFinish={() => setShowGlasses(true)}/>
            {showGlasses && (
                <GlassesList glasses={glasses}/>
            )}
        </Container>
    </>
}

export default Home