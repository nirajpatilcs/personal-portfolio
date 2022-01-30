import React from 'react'

export default function Button(props) {
    return(

        <button class="cta">
            <span>{props.str}</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
    )
}