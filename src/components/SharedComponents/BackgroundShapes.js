import React from 'react'
import { useMediaQuery } from 'react-responsive'
import desktop from './../../images/background-shapes-desktop.svg'
import mobile from './../../images/background-shapes-mobile.svg'

const BackgroundShapes = () => {
	const isDesktop = useMediaQuery({ minWidth: 641 })

    return (
        <div style={ { height: '100%', overflow: 'hidden' } }>
			{isDesktop && <img src={desktop} alt='background-shapes' width='100%'/>}
			{!isDesktop && <img src={mobile} alt='background-shapes' width='100%' />}
        </div>
    )
}

export default BackgroundShapes
