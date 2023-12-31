import { IGlassesSelected } from '../../../../../types'
import { FC } from 'react'
import useHandleCopy from './useHandleCopy'
import useHandleShare from './useHandleShare'
import { Container, Options, Option, QRCodeRaw } from './style'
import handleDownload from './handleDownload'

interface IProps {
    glasses: IGlassesSelected
}

const QRCode: FC<IProps> = ({ glasses }) => {
    const link = `${process.env.NEXT_PUBLIC_DOMAIN}/glasses/${glasses.id}`
    const handleCopy = useHandleCopy(link)
    const handleShare = useHandleShare(glasses)

    return (
        <Container onClick={ev => ev.stopPropagation()}>
            <Options>
                <Option onClick={handleCopy}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                    </svg>
                </Option>
                <Option onClick={handleShare}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                    </svg>
                </Option>
                <Option onClick={handleDownload}>
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
            <QRCodeRaw
                level="M"
                id="qrcode"
                value={link}
                fgColor="#efefef"
                bgColor="#0e0e0e"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                imageSettings={{ src: '/img/Logo.svg', excavate: false, height: 40, width: 40 }}
            />
        </Container>
    )
}

export default QRCode