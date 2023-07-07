import { IQuestions, IGlassesSelected } from '../types'
import glasses from './glasses'

function evaluateGlasses(questions: IQuestions) {
    if (questions) {
        const price = Number(questions.idealPrice.replace('R$', '').replace(',', '').replace('.', '').trim())
        const glassesSelected: IGlassesSelected[] = []

        glasses.map(glasses => {
            let points = 0

            if (glasses.priceRaw <= price) {
                points++
            }

            if (questions.veryScreenTime === 'sim' && glasses.filterBlue) {
                points++
            }

            if (questions.verySunnyPlaces === 'sim' && glasses.sunglasses) {
                points++
            }

            glassesSelected.push({
                ...glasses,
                points
            })
        })

        console.clear()

        return glassesSelected.sort((a, b) => b.points-a.points).map(glasses => glasses)
    }
}

export default evaluateGlasses