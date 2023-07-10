import { IQuestions } from '../../types'
import { Dispatch, SetStateAction } from 'react'

interface IProps {
    shape: IQuestions['shape']
    veryScreenTime: IQuestions['veryScreenTime']
    verySunnyPlaces: IQuestions['verySunnyPlaces']
    setShape: Dispatch<SetStateAction<IQuestions['shape']>>
    setIdealPrice: Dispatch<SetStateAction<IQuestions['idealPrice']>>
    setVeryScreenTime: Dispatch<SetStateAction<IQuestions['veryScreenTime']>>
    setVerySunnyPlaces: Dispatch<SetStateAction<IQuestions['verySunnyPlaces']>>
}

export {
    IProps
}