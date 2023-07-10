import { FC } from 'react'
import { IProps } from './types'
import { Form } from './style'
import FieldShape from './fields/FieldShape'
import FieldBoolean from './fields/FieldBoolean'
import FieldIdealPrice from './fields/FieldIdealPrice'

const FormQuestions: FC<IProps> = ({ shape, setShape, veryScreenTime, setVeryScreenTime, setIdealPrice, verySunnyPlaces, setVerySunnyPlaces }) => {
    return (
        <Form onSubmit={ev => ev.preventDefault()}>
            <FieldShape shape={shape} setShape={setShape}/>
            <FieldBoolean value={veryScreenTime} setValue={setVeryScreenTime} label="Você passa muito tempo no celular ou computador?"/>
            <FieldBoolean value={verySunnyPlaces} setValue={setVerySunnyPlaces} label="Você costuma sair para lugares ensolarados?"/>
            <FieldIdealPrice setIdealPrice={setIdealPrice}/>        
        </Form>
    )
}

export default FormQuestions