import React from 'react'
import TopBar from './components/TopBar'
import ContextHeader from './components/ContextHeader'
import PrimaryWorkspace from './components/PrimaryWorkspace'
import SecondaryPanel from './components/SecondaryPanel'
import ProofFooter from './components/ProofFooter'

export default function App() {
  return (
    <div className="app-root">
      <TopBar projectName="KodNest Premium Build" step={{current:1,total:3}} status="Not Started" />
      <ContextHeader title="Build a Calm, Confident UI" subtitle="Follow the steps to produce a polished build." />
      <main className="layout">
        <section className="primary">
          <PrimaryWorkspace />
        </section>
        <aside className="secondary">
          <SecondaryPanel />
        </aside>
      </main>
      <ProofFooter />
    </div>
  )
}
