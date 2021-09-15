import React from 'react'

function ContactInfo() {
    return (
        <ul>
            <li>
                <i class="fas fa-envelope"></i>
                hello@yay.com
            </li>
            <li>
                <i class="fas fa-phone"></i>123 456 7890
            </li>
            <li>
                <i class="fas fa-map-marker-alt"></i>123 Some Street
                <div>Somewhere </div>
                <div>Some City</div>
                <div>10000</div>
            </li>
        </ul>
    )
}

export default ContactInfo
