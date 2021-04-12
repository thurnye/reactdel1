import React from 'react'
import Right from './right/right'
import Left from './left/left'
import LivingRoom from './middle/livingrm'
export default function north() {
    return (
        <div className="component north">
           <Left/>
           <LivingRoom/>
           <Right/>
        </div>
    )
}
