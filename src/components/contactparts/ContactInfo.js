import React from 'react'

function ContactInfo() {
    return (
        <ul className="contactinfo">
            <li className="contactinfo__item">
                <i className="fas fa-envelope contactinfo__icon"></i>
                hello@yay.com
            </li>
            <li className="contactinfo__item">
                <i className="fas fa-phone contactinfo__icon"></i>123 456 7890
            </li>
            <li className="contactinfo__item">
                <i className="fas fa-map-marker-alt contactinfo__icon"></i>123 Some Street
                <div className="contactinfo__text">Somewhere</div>
                <div className="contactinfo__text">Some City</div>
                <div className="contactinfo__text">10000</div>
            </li>
        </ul>
    )
}

export default ContactInfo
