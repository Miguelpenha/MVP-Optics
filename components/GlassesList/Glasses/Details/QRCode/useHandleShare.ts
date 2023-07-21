import { IGlasses } from '../../../../../types'
import { MouseEvent } from 'react'

function useHandleShare(glasses: IGlasses) {
    function handleShare(ev: MouseEvent) {
        ev.stopPropagation()

        if (navigator.share) {
            navigator.share({
                title: glasses.name,
                text: glasses.description,
                url: `${process.env.NEXT_PUBLIC_DOMAIN}/glasses/${glasses.id}`
            })
        }
    }

    return handleShare
}

export default useHandleShare