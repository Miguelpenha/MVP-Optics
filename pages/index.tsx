import { useState } from 'react'
import { IQuestions } from '../types'
import useEvaluateGlasses from '../components/useEvaluateGlasses'
import Head from 'next/head'
import { Container, Title } from '../styles/pages'
import FormQuestions from '../components/Form'
import GlassesList from '../components/GlassesList'

function Home() {
    const [questions, setQuestions] = useState<IQuestions>()
    const [showGlasses, setShowGlasses] = useState<boolean>(false)
    const glasses = useEvaluateGlasses(showGlasses, questions)

    return <>
        <Head>
            <title>Ótica MVP</title>
        </Head>
        <Container>
            <Title>Faça uma avaliação</Title>
            <FormQuestions setQuestions={setQuestions} onFinish={() => setShowGlasses(true)}/>
            {showGlasses && (
                <GlassesList glasses={glasses}/>
            )}
        </Container>
    </>
}

export default Home