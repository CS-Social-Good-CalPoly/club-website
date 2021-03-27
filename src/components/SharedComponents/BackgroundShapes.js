import React from 'react'
import backgroundShapes from './../../images/background-shapes.svg'

const BackgroundShapes = () => {
    return (
        <div style={{height: '150px'}, {overflow: 'hidden'}} className='waves'>
            <img src={backgroundShapes} alt='background-shapes' width='100%' />
        </div>
    )
}

export default BackgroundShapes
