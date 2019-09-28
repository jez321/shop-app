import React from 'react'
import './menu-item.component.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)} className={`menu-item ${size}`} >
        <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span title="subtitle">
                SHOP NOW
            </span>
        </div>
    </div >
)

export default withRouter(MenuItem)