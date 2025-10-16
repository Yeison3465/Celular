import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({icon, to , classname}) => {
    return (
        <>
            <Link to={to}>
                
                <button className={`${classname}`}>
                    {icon}
                </button>
            </Link>
        </>
    )
}
