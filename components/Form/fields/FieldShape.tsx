import { IQuestions } from '../../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import { Field, Label, Options } from '../style'
import Option from '../../Option'

interface IProps {
    shape: IQuestions['shape']
    setShape: Dispatch<SetStateAction<IQuestions['shape']>>
}

const FieldShape: FC<IProps> = ({ shape, setShape }) => {
    return (
        <Field>
            <Label htmlFor="shape">Qual o formato do seu rosto?</Label>
            <Options>
                <Option selected={shape==='round'} onClick={() => setShape('round')} title="Redondo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/>
                    </svg>
                </Option>
                <Option selected={shape==='oval'} onClick={() => setShape('oval')} title="Oval">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="12" cy="12" rx="8" ry="10"/>
                    </svg>
                </Option>
                <Option selected={shape==='square'} onClick={() => setShape('square')} title="Quadrado">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect rx="5" width="100%" height="100%"/>
                    </svg>
                </Option>
            </Options>
        </Field>
    )
}

export default FieldShape