import { MouseEvent } from 'react'

function handleDownload(event: MouseEvent) {
    event.stopPropagation()

    const svg = document.getElementById('qrcode')

    if (svg) {
        const svgData = new XMLSerializer().serializeToString(svg)
        const blob = new Blob([svgData], { type: 'image/svg+xml' })
        const svgDataUrl = URL.createObjectURL(blob)

        const link = document.createElement('a')

        link.download = 'qrcode.svg'
        link.href = svgDataUrl

        link.click()
        link.remove()
    }
}

export default handleDownload