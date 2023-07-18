import { IQuestions } from '../../../types'
import { Dispatch, SetStateAction, FC, useState, useEffect } from 'react'
import { Field, Label, Options, Button } from '../style'
import Option from '../../Option'

interface IProps {
    setIndexQuestion: Dispatch<SetStateAction<number>>
    setQuestions: Dispatch<SetStateAction<IQuestions | undefined>>
}

const FieldShape: FC<IProps> = ({ setQuestions, setIndexQuestion }) => {
    const [shape, setShape] = useState<IQuestions['shape']>()

    useEffect(() => {
        if (shape) {
            setQuestions(questions => {
                if (questions) {
                    questions.shape = shape
                    
                    return questions
                }
            })
        }
    }, [shape])

    return (
        <Field>
            <Label htmlFor="shape">Qual o formato do seu rosto?</Label>
            <Options>
                <Option selected={shape==='round'} onClick={() => setShape(shape => shape ==='round' ?  undefined : 'round')} title="Redondo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/>
                    </svg>
                </Option>
                <Option selected={shape==='oval'} onClick={() => setShape(shape => shape ==='oval' ?  undefined : 'oval')} title="Oval">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="12" cy="12" rx="8" ry="10"/>
                    </svg>
                </Option>
                <Option selected={shape==='square'} onClick={() => setShape(shape => shape ==='square' ?  undefined : 'square')} title="Quadrado">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect rx="5" width="100%" height="100%"/>
                    </svg>
                </Option>
            </Options>
            {shape && (
                <Button onClick={() => {
                    setIndexQuestion(indexQuestion => indexQuestion+1)

                    setShape(undefined)
                }} title="Confirmar" iconDirection="right" sizeIcon={3}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </Button>
            )}
        </Field>
    )
}

export default FieldShape