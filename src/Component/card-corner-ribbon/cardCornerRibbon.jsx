import clsx from 'clsx';
import React from 'react' ;
import style from './cardCornerRibbon.module.scss'

const CornerRibbon = ({discount}) => {
    return(
        <div className={clsx(style.cornerRibbon , 
                        style.ribbon_top_left)}>
            <span>60% off</span>
        </div>
    )
} 

export default CornerRibbon;