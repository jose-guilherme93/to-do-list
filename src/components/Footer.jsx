import React, { useState } from 'react'

import "./Footer.css"
const Footer = () => {
        const [footer, setFooter] = useState(0)

    return (
        <>
            
        <h1>Contador: {footer}<button className="button" onClick={() => {setFooter(footer + 1)}}>Acionar</button></h1>
            
        </>
    )
}
export default Footer