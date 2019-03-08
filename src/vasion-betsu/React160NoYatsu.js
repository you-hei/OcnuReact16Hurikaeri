import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const FragmentsDekiru = () => [
    <div key="boe1">こ１</div>,
    <div key="boe2">こ２</div>,
    <div key="boe3">こ３</div>,
]

const portalsRoot = document.getElementById('portals-root')

class PortalsDekiru extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }
    componentDidMount() {
        portalsRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        portalsRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

// class ErrorBoundariesDekiru extends Component {
//     render() {
//         return <div/>
//     }
// }

const React16NoYatsu = () => (
    <div>
        <h1>React16</h1>
        <h2>Fragments</h2>
        <FragmentsDekiru />
        <h2>Portals</h2>
        <PortalsDekiru>ジョンダリ</PortalsDekiru>
        <h2>Error Boundaries</h2>
    </div>
)

export default React16NoYatsu
