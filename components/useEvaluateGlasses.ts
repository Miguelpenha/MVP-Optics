import { IQuestions, IGlassesSelected } from '../types'
import { useState, useEffect } from 'react'
import evaluateGlasses from '../services/evaluateGlasses'

function useEvaluateGlasses(finish: boolean, questions: IQuestions | undefined) {
    const [glasses, setGlasses] = useState<IGlassesSelected[]>()

    useEffect(() => {
        if (finish && questions) {
            const glassesSelected = evaluateGlasses(questions)

            setGlasses(glassesSelected)
        }
    }, [questions, finish])

    return glasses
}
 
export default useEvaluateGlasses