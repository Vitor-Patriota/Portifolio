import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="brand">
          <div className="logo-mark">VP</div>
          <div>
            <h1 className="name">Vitor Patriota</h1>
            <p className="role">Desenvolvedor Web • React/Node.js</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="header-ctas">
          <a className="btn primary" href="https://github.com/Vitor-Patriota" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn ghost" href="https://www.linkedin.com/in/vitor-patriota" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  )
}
