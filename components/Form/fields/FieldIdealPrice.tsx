import { Dispatch, SetStateAction, FC, useState, useEffect } from 'react'
import { IQuestions } from '../../../types'
import { Field, Label, Input, Button } from '../style'

interface IProps {
    setIndexQuestion: Dispatch<SetStateAction<number>>
    setQuestions: Dispatch<SetStateAction<IQuestions | undefined>>
}

const FieldIdealPrice: FC<IProps> = ({ setQuestions, setIndexQuestion }) => {
    const [idealPrice, setIdealPrice] = useState<string>()

    useEffect(() => {
        if (idealPrice) {
            setQuestions(questions => {
                if (questions) {
                    questions.idealPrice = idealPrice
                    
                    return questions
                }
            })
        }
    }, [idealPrice])

    return (
        <Field>
            <Label htmlFor="idealPrice">Qual o preço ideal que você está pensando?</Label>
            <Input value={idealPrice} placeholder="Preço ideal..." name="idealPrice" onChange={ev => {
                if (Number(ev.target.value.replace(',', ''))) {
                    setIdealPrice(ev.target.value)
                }
            }}/>
            {idealPrice && (
                <Button onClick={() => {
                    setIndexQuestion(indexQuestion => indexQuestion+1)

                    setIdealPrice(undefined)
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

export default FieldIdealPrice