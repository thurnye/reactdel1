import React from 'react'
import Oven from './oven.jsx'
import Sink from './sink.jsx'
import Kitchen from './kitchen.jsx'

export default function right() {
    return (
        <div className="component right">
            <div className="oven-sink">
                <Oven/>
                <Sink/>
            </div>
            <Kitchen/>
            
        </div>
    )
}
