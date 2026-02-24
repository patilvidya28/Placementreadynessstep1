import React from 'react'

export default function TopBar({ projectName, step, status }){
  return (
    <header className="topbar">
      <div className="topbar__left">{projectName}</div>
      <div className="topbar__center">Step {step.current} / {step.total}</div>
      <div className="topbar__right"><span className={`badge badge--${status.replace(/\s+/g,'').toLowerCase()}`}>{status}</span></div>
    </header>
  )
}
