import { useState } from 'react'
import useEvaluateGlasses from '../components/useEvaluateGlasses'
import Head from 'next/head'
import { Container, Title, Form, Field, Input, GlassesContainer, Glasses } from '../styles/pages'

function Home() {
    const [shape, setShape] = useState('')
    const [veryScreenTime, setVeryScreenTime] = useState('')
    const [idealPrice, setIdealPrice] = useState('')
    const [verySunnyPlaces, setVerySunnyPlaces] = useState('')
    const glasses = useEvaluateGlasses({ idealPrice, shape, veryScreenTime, verySunnyPlaces })

    return <>
        <Head>
            <title>Ótica MVP</title>
        </Head>
        <Container>
            <Title>Faça uma avaliação</Title>
            <Form onSubmit={ev => ev.preventDefault()}>
                <Field>
                    <label htmlFor="shape">Qual o formato do seu rosto?</label>
                    <Input placeholder="Formato do rosto..." name="shape" onChange={ev => setShape(ev.target.value)}/>
                </Field>
                <Field>
                    <label htmlFor="veryScreenTime">Você passa muito tempo no celular ou computador?</label>
                    <Input placeholder="Muito tempo de tela..." name="veryScreenTime" onChange={ev => setVeryScreenTime(ev.target.value)}/>
                </Field>
                <Field>
                    <label htmlFor="idealPrice">Qual o preço ideal que você está pensando?</label>
                    <Input placeholder="Preço ideal..." name="idealPrice" onChange={ev => setIdealPrice(ev.target.value)}/>
                </Field>
                <Field>
                    <label htmlFor="verySunnyPlaces">Você costuma a sair muito para lugares ensolarados?</label>
                    <Input placeholder="Saí para muito lugares com sol..." name="verySunnyPlaces" onChange={ev => setVerySunnyPlaces(ev.target.value)}/>
                </Field>
            </Form>
            {glasses && (
                <GlassesContainer>
                    {glasses.map((glasses, index) => (
                        <Glasses key={index}>{index+1}° - {glasses.name} ({glasses.points})</Glasses>
                    ))}
                </GlassesContainer>
            )}
        </Container>
    </>
}

export default Home