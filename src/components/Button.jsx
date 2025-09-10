import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({icon,to}) => {
    return (
        <>
            <Link to={to}>
                
                <button>
                    {icon}
                </button>
            </Link>
        </>
    )
}
