import React, { useEffect } from 'react'

export default function Loader(props){

    // useEffect(() => {
    //     setTimeout(props.loadingDone, 4000)
    // }, [])

    return (
        <div className="loader-wrapper">
            <svg width="100" height="100">
                <polygon points="5,5 100,5 100,100 5,100" />
            </svg>
            <div className='loader-text'>N</div>
        </div>
    )
}