import { Dispatch, SetStateAction, FC } from 'react'
import { Field, Label, Options } from '../style'
import Option from '../../Option'

interface IProps {
    label: string
    value: boolean | undefined
    setValue: Dispatch<SetStateAction<boolean | undefined>>
}

const FieldBoolean: FC<IProps> = ({ label, value, setValue }) => {
    return (
        <Field>
            <Label>{label}</Label>
            <Options>
                <Option selected={value===true} title="Sim" onClick={() => setValue(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </Option>
                <Option selected={value===false} title="Não" onClick={() => setValue(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                </Option>
            </Options>
        </Field>
    )
}

export default FieldBoolean