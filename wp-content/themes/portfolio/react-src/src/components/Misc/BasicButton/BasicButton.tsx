import React from 'react'
import {Button} from 'react-bootstrap';
import './BasicButton.scss';

interface PropsInterface {
    text: string
    atClick?: Function
    type?: string
}

const BasicButton = (props: PropsInterface) => {
    let buttonType = props.type ? props.type : 'primary'
    return (
        <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.atClick ? props.atClick() : null} className={`${buttonType}-btn`}>{props.text}</Button>
    )
}

export default BasicButton