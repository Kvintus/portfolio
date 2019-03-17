import React from 'react'
import {Button} from 'react-bootstrap';
import './BasicButton.scss';

interface PropsInterface {
    text: string
    atClick: Function
}

const BasicButton = (props: PropsInterface) => {
    return (
        <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.atClick()} className="main-btn">{props.text}</Button>
    )
}

export default BasicButton