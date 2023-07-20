import { IGlasses } from '../types'
import glasses from './glasses'

function useGlasses(id: string) {
    let glassesSelected = null as unknown as IGlasses

    glasses.map(glasses => {
        if (id === glasses.id) {
            glassesSelected = glasses
        }
    })

    return glassesSelected
}

export default useGlasses