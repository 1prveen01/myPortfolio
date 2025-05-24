import React from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({position , size}) => {

    // destructure position and size 
    const {top , left} = position
    const {width , height} = size


    return (
        <div className='absolute'
            style={{
                top: top,
                left: left,
                width: width,
                height: height,
                transform: 'translate(-50% , -50%)'
            }}
        > 

        <div className='bg-purple-500/20 blur-3xl animate-[var(--animation-blob)] w-full h-full rounded-full '></div>
        </div>

        


    )
}

//define PropTypes
BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size:PropTypes.shape({
        width:PropTypes.string,
        height: PropTypes.string,
    })

}

export default BlurBlob