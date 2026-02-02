import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import './styles/portfolio.css'

const projects = [
  {
    id: 1,
    title: 'Gerenciador de Finanças Pessoais',
    description:
      'Aplicação para controle de receitas e despesas, com gráficos, filtro por categoria e exportação de relatórios.',
    tech: ['React', 'Vite', 'React.js', 'CSS'],
    demo: 'https://gerenciador-financas-react-rho.vercel.app/',
    repo: 'https://github.com/Vitor-Patriota/gerenciador-financas-react'
  },
  {
    id: 2,
    title: 'API de Gerenciamento de Estudantes',
    description:
      'API REST com autenticação, CRUD de estudantes e painel administrativo integrado ao frontend.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://vitor-patriota-projeto-api-estudant.vercel.app',
    repo: 'https://github.com/Vitor-Patriota/gerenciador-financas-react'
  }
]

export default function App() {
  return (
    <div className="site-root">
      <Header />

      <main className="container">
        <section id="projetos" className="section">
          <h2 className="section-title">Projetos</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section id="sobre" className="section">
          <h2 className="section-title">Sobre mim</h2>
          <p className="lead">
            Sou desenvolvedor Frontend em início de carreira, focado em React e
            boas práticas. Busco oportunidades como estagiário ou júnior para
            crescer tecnicamente e contribuir com produtos reais.
          </p>
        </section>

        <section id="tecnologias" className="section">
          <h2 className="section-title">Tecnologias</h2>
          <div className="tech-list">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'].map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </section>

        <section id="contato" className="section contact">
          <h2 className="section-title">Contato</h2>
          <p>
            Email: <a href="mailto:vitorpatriotadev@email.com">vitorpatriotadev@email.com</a>
          </p>
          <p>
            LinkedIn: <a href="www.linkedin.com/in/vitor-patriota

" target="_blank" rel="noreferrer">www.linkedin.com/in/vitor-patriota

</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/Vitor-Patriota" target="_blank" rel="noreferrer">https://github.com/Vitor-Patriota</a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
