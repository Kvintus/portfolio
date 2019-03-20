import React from 'react'
import './SocialMediaButton.scss'

interface MediaButtonProps {
    iconClasses: string
    link: string
}

const SocialMediaButton = (props: MediaButtonProps) => {
    return (
        <a className="social-media-button" target="_blank" href={props.link}><i className={props.iconClasses}></i></a>
    )
}

export default SocialMediaButton;