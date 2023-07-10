import { Dispatch, SetStateAction, FC } from 'react'
import { IQuestions } from '../../../types'
import { Field, Label, Input } from '../style'

interface IProps {
    setIdealPrice: Dispatch<SetStateAction<IQuestions['idealPrice']>>
}

const FieldIdealPrice: FC<IProps> = ({ setIdealPrice }) => {
    return (
        <Field>
            <Label htmlFor="idealPrice">Qual o preço ideal que você está pensando?</Label>
            <Input placeholder="Preço ideal..." name="idealPrice" onChange={ev => {
                if (Number(ev.target.value.replace(',', ''))) {
                    setIdealPrice(ev.target.value)
                } else {

                }
            }}/>
        </Field>
    )
}

export default FieldIdealPrice