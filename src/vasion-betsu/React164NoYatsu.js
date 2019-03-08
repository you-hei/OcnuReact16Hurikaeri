import React, { Component } from 'react'

////////////  pointer event ///////////////////

class PointerEventDekiru extends Component {
    render() {
        const onPointerDown = (ev) => { console.log('onPointerDown', ev) }
        const onPointerMove = (ev) => { console.log('onPointerMove', ev) }
        const onPointerUp = (ev) => { console.log('onPointerUp', ev) }
        const onPointerCancel = (ev) => { console.log('onPointerCancel', ev) }
        const onGotPointerCapture = (ev) => { console.log('onGotPointerCapture', ev) }
        const onLostPointerCapture = (ev) => { console.log('onLostPointerCapture', ev) }
        const onPointerEnter = (ev) => { console.log('onPointerEnter', ev) }
        const onPointerLeave = (ev) => { console.log('onPointerLeave', ev) }
        const onPointerOver = (ev) => { console.log('onPointerOver', ev) }
        const onPointerOut = (ev) => { console.log('onPointerOut', ev) }
        return (
            <div>
                <div
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerCancel}
                    onGotPointerCapture={onGotPointerCapture}
                    onLostPointerCapture={onLostPointerCapture}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerOver={onPointerOver}
                    onPointerOut={onPointerOut}
                    style={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'green'
                    }}
                />
            </div>
        )
    }
}

const React164NoYatsu = () => (
    <div>
        <h1>React16.4</h1>
        <h2>ContextAPI</h2>
        <PointerEventDekiru />
    </div>
)

export default React164NoYatsu
