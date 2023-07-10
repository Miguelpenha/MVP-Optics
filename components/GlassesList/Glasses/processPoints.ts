import { IGlassesSelected } from '../../../types'

function processPoints(glasses: IGlassesSelected) {
    if (glasses.points > 0) {
        return `${glasses.points} ponto${glasses.points > 1 ? 's' : ''}`
    } else {
        return 'Nenhum ponto'
    }
}

export default processPoints