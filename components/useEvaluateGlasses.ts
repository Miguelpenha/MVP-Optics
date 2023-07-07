import { IQuestions, IGlassesSelected } from '../types'
import { useState, useEffect } from 'react'
import evaluateGlasses from '../services/evaluateGlasses'

function useEvaluateGlasses(questions: IQuestions) {
    const [glasses, setGlasses] = useState<IGlassesSelected[]>()

    useEffect(() => {
        const glassesSelected = evaluateGlasses(questions)

        setGlasses(glassesSelected)
    }, [questions])

    return glasses
}

export default useEvaluateGlasses