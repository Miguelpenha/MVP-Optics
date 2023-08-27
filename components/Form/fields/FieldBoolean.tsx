import { IQuestions } from '../../../types'
import { Dispatch, SetStateAction, FC, useState, useEffect } from 'react'
import { Field, Label, Options, Button } from '../style'
import Option from '../../Option'

interface IProps {
    label: string
    name: keyof IQuestions
    setIndexQuestion: Dispatch<SetStateAction<number>>
    setQuestions: Dispatch<SetStateAction<IQuestions | undefined>>
}

const FieldBoolean: FC<IProps> = ({ name, label, setQuestions, setIndexQuestion }) => {
    const [value, setValue]= useState<boolean>()

    useEffect(() => {
        if (value === true || value === false) {
            setQuestions((questions: any={}) => {
                questions[name] = value
                    
                return questions
            })
        }
    }, [value])

    return (
        <Field>
            <Label>{label}</Label>
            <Options>
                <Option selected={value===true} title="Sim" onClick={() => setValue(value === true ? undefined : true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </Option>
                <Option selected={value===false} title="Não" onClick={() => setValue(value === false ? undefined : false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                    </svg>
                </Option>
            </Options>
            <Button disabled={value === undefined} onClick={() => {
                setIndexQuestion(indexQuestion => indexQuestion+1)

                setValue(undefined)
            }} title="Confirmar" iconDirection="right" sizeIcon={3}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
            </Button>
        </Field>
    )
}

export default FieldBoolean