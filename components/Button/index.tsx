import { FC, ButtonHTMLAttributes } from 'react'
import { Container, Text } from './style'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, children, title, ...props }) => {
    return (
        <Container onClick={onClick} {...props}>
            {children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button