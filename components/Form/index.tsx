import { IQuestions } from '../../types'
import { Dispatch, SetStateAction, FC, useState, useEffect } from 'react'
import { Form } from './style'
import useFields from './fields'

interface IProps {
    onFinish: () => void
    setQuestions: Dispatch<SetStateAction<IQuestions | undefined>>
}

const FormQuestions: FC<IProps> = ({ setQuestions, onFinish }) => {
    const [indexQuestion, setIndexQuestion] = useState(0)
    const fields = useFields(setQuestions, setIndexQuestion)

    useEffect(() => {
        if (indexQuestion === 4) {
            onFinish()
        }
    }, [indexQuestion])
    
    return (
        <Form onSubmit={ev => ev.preventDefault()}>
            {fields[indexQuestion]}
        </Form>
    )
}

export default FormQuestions