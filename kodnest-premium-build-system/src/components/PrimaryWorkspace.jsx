import React from 'react'
import Card from './ui/Card'

export default function PrimaryWorkspace(){
  return (
    <div className="workspace">
      <Card>
        <h2>Primary Workspace</h2>
        <p>This is where the main product interaction happens. Content width is constrained for readable text blocks.</p>
      </Card>
      <div style={{height:16}} />
      <Card>
        <h3>Design Tokens</h3>
        <ul>
          <li>Spacing scale: 8 / 16 / 24 / 40 / 64</li>
          <li>Typography: Serif headings, Sans-serif body</li>
        </ul>
      </Card>
    </div>
  )
}
