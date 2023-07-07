import { IQuestions, IGlassesSelected } from '../types'
import formatMoney from '../utils/formatMoney'
import glasses from './glasses'
import dinero from 'dinero.js'

function evaluateGlasses(questions: IQuestions) {
    if (questions) {
        const { valueRaw: price } = formatMoney(questions.idealPrice)
        const glassesSelected: IGlassesSelected[] = []

        glasses.map(glasses => {
            let points = 0

            if (dinero({ amount: glasses.priceRaw, currency: 'BRL' }).lessThanOrEqual(dinero({ amount: price, currency: 'BRL' }))) {
                points++
            }

            if (questions.veryScreenTime && glasses.filterBlue) {
                points++
            }

            if (questions.verySunnyPlaces && glasses.sunglasses) {
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