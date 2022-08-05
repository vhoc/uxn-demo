import React from 'react'
import './styles.css'

export interface Props {}

export const Intro = (props: Props) => {
  return (
    <div {...props}>
        <h1>Quick Start</h1>
        <h3>Installation</h3>
        <pre>
            npm install --save uxn-demo
        </pre>

        <h3>Load styles</h3>
        <p>
            Add to your index.css or App.js the following import:
        </p>
        <pre>
            import 'uxn-demo/dist/uxn-demo.cjs.development.css'
        </pre>
    </div>
  )
}