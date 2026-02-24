import React from 'react'

export default function ProofFooter(){
  return (
    <footer className="proof-footer">
      <label><input type="checkbox" /> UI Built</label>
      <label><input type="checkbox" /> Logic Working</label>
      <label><input type="checkbox" /> Test Passed</label>
      <label><input type="checkbox" /> Deployed</label>
    </footer>
  )
}
