import { IGlassesSelected } from '../../../types'

function processTitle(index: number, glasses: IGlassesSelected) {
    const title = `${index+1}° opção - ${glasses.name}`
    
    return title
}

export default processTitle