import React from 'react'
import './ParallaxDivider.scss'

interface DividerProps{
    image: String
    children?: React.ReactNode
}

const Divider = (props: DividerProps) => {
    return (
        <div className="parallax-divider" style={{
            background: `url(${props.image})`
        }}>
            {props.children}
        </div>
    )
}

export default Divider;