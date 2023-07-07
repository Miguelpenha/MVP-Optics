import { FC, ButtonHTMLAttributes } from 'react'
import { Container, Text } from './style'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    selected?: boolean
}

const Option: FC<IProps> = ({ onClick, children, title, selected, ...props }) => {
    return (
        <Container selected={selected} onClick={onClick} {...props}>
            {children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Option