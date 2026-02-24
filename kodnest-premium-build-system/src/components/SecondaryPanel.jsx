import React from 'react'
import Button from './ui/Button'

export default function SecondaryPanel(){
  return (
    <div className="secondary-panel">
      <h4>Step Explanation</h4>
      <p className="muted">Short guidance for the current step. Keep copy concise.</p>

      <label className="label">Copyable prompt</label>
      <textarea className="prompt-box" readOnly defaultValue={'Build a calm, confident UI with KodNest.'} />

      <div className="secondary-panel__buttons">
        <Button variant="primary">Copy</Button>
        <Button variant="outline">Build in Lovable</Button>
        <Button variant="outline">It Worked</Button>
        <Button variant="outline">Error</Button>
        <Button variant="outline">Add Screenshot</Button>
      </div>
    </div>
  )
}
