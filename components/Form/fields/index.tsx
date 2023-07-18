import { IQuestions } from '../../../types'
import { Dispatch, SetStateAction } from 'react'
import FieldShape from './FieldShape'
import FieldBoolean from './FieldBoolean'
import FieldIdealPrice from './FieldIdealPrice'

const useFields = (setQuestions: Dispatch<SetStateAction<IQuestions | undefined>>, setIndexQuestion: Dispatch<SetStateAction<number>>) => [
    <FieldShape setQuestions={setQuestions} setIndexQuestion={setIndexQuestion}/>,
    <FieldBoolean
        name="veryScreenTime"
        setQuestions={setQuestions}
        setIndexQuestion={setIndexQuestion}
        label="Você passa muito tempo no celular ou computador?"
    />,
    <FieldBoolean
        name="verySunnyPlaces"
        setQuestions={setQuestions}
        setIndexQuestion={setIndexQuestion}
        label="Você costuma sair para lugares ensolarados?"
    />,
    <FieldIdealPrice setQuestions={setQuestions} setIndexQuestion={setIndexQuestion}/>
]

export default useFields