import React from 'react'
import darkBlue from './../../images/dark-blue-wave.svg';
import lightBlue from './../../images/light-blue-wave.svg';
import footerDarkBlue from './../../images/footer-dark-blue-wave.svg';

/*
 * props
 * color: wave color ('dark-blue', 'light-blue', 'footer-dark-blue')
 */

const Waves = (props) => {
    const color = props.color;
    let wave;
    if (color === 'dark-blue') wave = darkBlue;
    else if (color === 'light-blue') wave = lightBlue;
    else wave = footerDarkBlue;

    return (
        <div style={{height: '150px'}, {overflow: 'hidden'}} className='waves'>
            <img src={wave} alt={color} width='100%' />
        </div>  
    )
}

export default Waves