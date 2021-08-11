import React from 'react'
import darkBlue from './../../images/dark-blue-wave.svg';
import lightBlue from './../../images/gray-wave.svg';
import footerDarkBlue from './../../images/footer-dark-blue-wave.svg';
import lightGreen from './../../images/light-green-wave.svg';
import darkGreen from './../../images/dark-green-wave.svg';

/*
 * props
 * color: wave color ('dark-blue', 'light-blue', 'footer-dark-blue')
 */

const Waves = (props) => {
    const color = props.color;
    let wave;
    if (color === 'dark-blue') wave = darkBlue;
    else if (color === 'light-blue') wave = lightBlue;
    else if (color === 'light-green') wave = lightGreen;
    else if (color === 'dark-green') wave = darkGreen;
    else wave = footerDarkBlue;

    return (
        <div style={{overflow: 'hidden'}} className='waves'>
            <img src={wave} alt={color} width='100%' />
        </div>  
    )
}

export default Waves