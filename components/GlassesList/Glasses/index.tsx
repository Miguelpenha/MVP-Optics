import { IGlassesSelected } from '../../../types'
import { FC, useState } from 'react'
import processPoints from './processPoints'
import processTitle from './processTitle'
import { Container, Points, Title, ImageGlasses, Details, Detail, ContainerQRCode, Options, Option, QRCode } from './style'
import blurData from '../../../utils/blurData'

interface IProps {
    index: number
    glasses: IGlassesSelected
}

const Glasses: FC<IProps> = ({ index, glasses }) => {
    const points = processPoints(glasses)
    const title = processTitle(index, glasses)
    const [showDetails, setShowDetails] = useState<boolean | undefined>(undefined)

    function handleDownload() {
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

    function handleShare() {
        if (navigator.share) {
            navigator.share({
                title: glasses.name,
                text: glasses.description,
                url: `${process.env.NEXT_PUBLIC_DOMAIN}/glasses/${glasses.id}`
            })
        }
    }

    return (
        <Container onClick={() => setShowDetails(!showDetails)}>
            <Points>{points}</Points>
            <Title>{title}</Title>
            <ImageGlasses
                fill
                placeholder="blur"
                src={glasses.image}
                blurDataURL={blurData}
                alt={glasses.description}
            />
            <Details show={showDetails}>
                <Detail>Pontos: {glasses.points}</Detail>
                <Detail>Preço: {glasses.price}</Detail>
                <Detail>Tags: {glasses.tags.map((tag, index) => `${tag}${index==glasses.tags.length-1 ? '' : ', '}`)}</Detail>
                <Detail>Nome: {glasses.name}</Detail>
                <Detail>Marca: {glasses.brand}</Detail>
                <Detail>Descrição: {glasses.description}</Detail>
                <Detail>Filtro de luz Azul: {glasses.filterBlue ? 'Tem' : 'Não tem'}</Detail>
                <Detail>Proteção contra luz solar: {glasses.sunglasses ? 'Tem' : 'Não tem'}</Detail>
                <ContainerQRCode onClick={ev => ev.stopPropagation()}>
                    <Options>
                        <Option onClick={ev => {
                            ev.stopPropagation()

                            handleShare()
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                            </svg>
                        </Option>
                        <Option onClick={ev => {
                            ev.stopPropagation()

                            handleDownload()
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                                <g>
                                    <rect fill="none" height="24" width="24"/>
                                </g>
                                <g>
                                    <path d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"/>
                                </g>
                            </svg>
                        </Option>
                    </Options>
                    <QRCode
                        level="M"
                        id="qrcode"
                        fgColor="#efefef"
                        bgColor="#0e0e0e"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        value={`${process.env.NEXT_PUBLIC_DOMAIN}/glasses/${glasses.id}`}
                        imageSettings={{ src: '/img/Logo.svg', excavate: false, height: 40, width: 40 }}
                    />
                </ContainerQRCode>
            </Details>
        </Container>
    )
}

export default Glasses