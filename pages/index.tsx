import { useState } from 'react'
import useEvaluateGlasses from '../components/useEvaluateGlasses'
import Head from 'next/head'
import { Container, Title, Form, Field, Label, Options, Input } from '../styles/pages'
import Option from '../components/Option'
import { IQuestions } from '../types'
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
            <Form onSubmit={ev => ev.preventDefault()}>
                <Field>
                    <Label htmlFor="shape">Qual o formato do seu rosto?</Label>
                    <Options>
                        <Option selected={shape==='round'} onClick={() => setShape('round')} title="Redondo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/>
                            </svg>
                        </Option>
                        <Option selected={shape==='oval'} onClick={() => setShape('oval')} title="Oval">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="12" cy="12" rx="8" ry="10"/>
                            </svg>
                        </Option>
                        <Option selected={shape==='square'} onClick={() => setShape('square')} title="Quadrado">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect rx="5" width="100%" height="100%"/>
                            </svg>
                        </Option>
                    </Options>
                </Field>
                <Field>
                    <Label htmlFor="veryScreenTime">Você passa muito tempo no celular ou computador?</Label>
                    <Options>
                        <Option selected={veryScreenTime===true} title="Sim" onClick={() => setVeryScreenTime(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </Option>
                        <Option selected={veryScreenTime===false} title="Não" onClick={() => setVeryScreenTime(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
                            </svg>
                        </Option>
                    </Options>
                </Field>
                <Field>
                    <Label htmlFor="idealPrice">Qual o preço ideal que você está pensando?</Label>
                    <Input placeholder="Preço ideal..." name="idealPrice" onChange={ev => setIdealPrice(ev.target.value)}/>
                </Field>
                <Field>
                    <Label htmlFor="verySunnyPlaces">Você costuma a sair muito para lugares ensolarados?</Label>
                    <Options>
                        <Option selected={verySunnyPlaces===true} title="Sim" onClick={() => setVerySunnyPlaces(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </Option>
                        <Option selected={verySunnyPlaces===false} title="Não" onClick={() => setVerySunnyPlaces(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
                            </svg>
                        </Option>
                    </Options>
                </Field>
            </Form>
            <GlassesList glasses={glasses}/>
        </Container>
    </>
}

export default Home