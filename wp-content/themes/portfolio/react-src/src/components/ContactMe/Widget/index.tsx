import React from 'react'
import './index.scss'

interface ContactItem {
    icon: string
    heading: string
    text: string
}

class InfoWidget extends React.Component {
    renderItem(item: ContactItem) {
        return (
            <div className="contact_info">
                <i className={"fa " + `fa-${item.icon}`}></i>
                <div className="contact_info_text">
                    <h5>{item.heading}</h5>
                    <p>{item.text}</p>
                </div>
            </div>
        )
    }

    items = [
        {
            icon: "home",
            heading: "Home",
            text: "1719 Del Dew Drive Annapolis Junction, MD 20701 California, United State"
        },
        {
            icon: "phone",
            heading: "Phone",
            text: "+421 948 509 880"
        },
        {
            icon: "envelope",
            heading: "Email",
            text: "rolik.jakob@gmail.com"
        }
    ]

    render() {
        return (
            <div className="contact_widget_area">
                {this.items.map(item => this.renderItem(item))}
            </div>
        )
    }
}

export default InfoWidget;