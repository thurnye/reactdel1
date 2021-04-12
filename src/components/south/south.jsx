import React from 'react'
import Bedroom2 from './bedrm2'
import Bedroom3 from './bedrm3'
import HalfBath from './halfBath'

export default function south() {
    return (
        <div className="component south">
           <Bedroom2/>
           <HalfBath/>
           <Bedroom3/>
        </div>
    )
}
