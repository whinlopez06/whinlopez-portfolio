import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Navigate, useLocation } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ArrowDown, Plus, Minus, Check } from 'lucide-react';
import '@fontsource-variable/epilogue';
import './style.css';
import { employers, moreProjects, projects } from './data';
import type { Project } from './data';

const email = 'whinlopez06@gmail.com';
const archiveId = (name: string) => 'archive-' + name.replace(/\W/g, '');

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? <ArrowUpRight size={19} aria-hidden="true" /> : <ArrowRight size={19} aria-hidden="true" />;
}

function Header() {
  return <header className="header page-width">
    <Link className="wordmark" to="/#top" aria-label="Erwin Lopez home">Erwin Lopez<span>.</span></Link>
    <nav aria-label="Main navigation"><a href="#experience">Experience</a><a href="#work">Work</a><a href="#about">About</a></nav>
    <a className="header-contact" href={'mailto:' + email}>Let’s talk <Arrow diagonal /></a>
  </header>;
}

function Hero() {
  return <section className="hero page-width" aria-labelledby="hero-title">
    <div className="hero-topline"><p>Software engineer · Fullstack builder · Quezon City, PH</p><p className="availability"><span aria-hidden="true" />Open to opportunities</p></div>
    <div className="hero-grid">
      <div className="hero-copy">
        <h1 id="hero-title">Fullstack <br />developer.</h1>
        <p className="hero-description">I turn complex product work into reliable web experiences.<br className="desktop-break" /> Shipping across Angular, Laravel, APIs, and SQL.</p>
        <div className="hero-actions">
          <a className="button" href="#work">Explore my work <ArrowDown size={18} aria-hidden="true" /></a>
          <a className="text-link" href={'mailto:' + email}>Get in touch <Arrow diagonal /></a>
        </div>
      </div>
      <aside className="hero-proof" aria-label="Featured contribution at Designly">
        <div className="proof-heading"><span>Designly / Cloudstaff</span><ArrowUpRight size={23} aria-hidden="true" /></div>
        <p className="proof-number">40<span>%</span></p>
        <p className="proof-title">Reduction in <br />project backlogs.</p>
        <p className="proof-context">Contributed through fullstack enhancements, maintenance, and bug fixes.</p>
        <a className="proof-link" href="#project-designly">See my contribution <Arrow /></a>
      </aside>
    </div>
    <div className="hero-bottom">
      <p className="experience-stat"><strong>10+</strong><span>years in software<br />development</span></p>
      <div className="hero-stack"><p>Across the stack</p><span>PHP & Laravel</span><span>Angular & TypeScript</span><span>APIs & SQL</span></div>
      <a className="scroll-link" href="#work" aria-label="Scroll to selected work"><ArrowDown size={24} aria-hidden="true" /></a>
    </div>
  </section>;
}

function ProjectItem({ project }: { project: Project }) {
  const company = employers.find(employer => employer.id === project.company);
  return <article className="project-row reveal" id={'project-' + project.id}>
    <div className="project-identity"><h3>{project.name}</h3><p>{company?.name || 'Personal project'}</p><span className="project-category">{project.category.split(' · ')[0]}</span><p className="project-date">{project.dates}</p></div>
    <div className="project-context"><p>{project.summary}</p><p className="project-highlight">{project.highlight}</p></div>
    <div className="project-tools"><p>{project.tech.slice(0, 3).join(' · ')}</p>{project.url && <a className="text-link" href={project.url} target="_blank" rel="noreferrer">Live project <Arrow diagonal /></a>}</div>
  </article>;
}

function SelectedWork() {
  return <section id="work" className="work section-pad page-width">
    <div className="section-heading"><h2>Selected work.</h2><p>Different industries.<br />The same hands-on approach.</p></div>
    <div className="project-list">{projects.map(project => <ProjectItem project={project} key={project.id} />)}</div>
    <AdditionalProjects />
  </section>;
}

function Experience() {
  const [selected, setSelected] = useState('cloudstaff');
  return <section id="experience" className="experience section-pad"><div className="page-width">
    <div className="section-heading"><h2>Good work.<br />Good teams.</h2><p>Experience with Philippine and international teams,<br className="desktop-break" /> from product development to client support.</p></div>
    <div className="experience-grid">{employers.map((employer, index) => <div className="company-entry" key={employer.id}>
      <button style={{ gridRow: index + 1 }} onClick={() => setSelected(selected === employer.id ? '' : employer.id)} aria-expanded={selected === employer.id} aria-controls={'company-' + employer.id} className={selected === employer.id ? 'company active' : 'company'}>
        <span>{employer.name}</span>{selected === employer.id ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
      </button>
      <article className="company-details" id={'company-' + employer.id} hidden={employer.id !== selected}>
        <h3>{employer.role}</h3><p className="company-date">{employer.dates}</p><p>{employer.summary}</p>
        {projects.filter(project => project.company === employer.id).map(project => <a className="related-project" href={'#project-' + project.id} key={project.id}>{project.name}<Arrow /></a>)}
        {moreProjects.filter(project => project.company === employer.id).map(project => <a className="related-project" href={'#' + archiveId(project.name)} key={project.name} onClick={() => {
          const detail = document.getElementById(archiveId(project.name));
          if (detail instanceof HTMLDetailsElement) detail.open = true;
        }}>{project.name}<ArrowDown size={18} aria-hidden="true" /></a>)}
        {employer.id === 'quadrant' && <p className="company-note">Rate programming · Quality assurance · Technical specifications</p>}
      </article>
    </div>)}</div>
  </div></section>;
}

function AdditionalProjects() {
  return <div className="archive-list" id="more-work">{moreProjects.map(project => <details className="archive-item" id={archiveId(project.name)} key={project.name}>
      <summary><span>{project.name}</span><span className="archive-employer">{employers.find(employer => employer.id === project.company)?.name}</span><Plus className="plus" size={20} aria-hidden="true" /><Minus className="minus" size={20} aria-hidden="true" /></summary>
      <div className="archive-content"><p>{project.summary}</p><p className="archive-date">{project.dates}</p><p>{project.tech}</p></div>
    </details>)}</div>;
}

function About() {
  return <section className="about section-pad" id="about"><div className="about-grid page-width">
    <div className="about-intro">
      <h2>Hi, I’m Erwin.</h2>
      <p>I’m a fullstack developer based in Quezon City, Philippines. For 10+ years, I’ve worked on the frontend, the backend, and the connections between them.</p>
      <p>My experience spans real estate, education, healthcare, and business applications. I build features, work through difficult bugs, and help existing systems move forward.</p>
      <a className="text-link" href={'mailto:' + email}>Have a role in mind? Let’s talk <Arrow diagonal /></a>
      <div className="education"><h3>Background</h3><p>BS Information Technology<br />University of the East · 2011</p><p>Laravel training · 2019<br />Introduction to AWS · 2020</p><p>English & Filipino · Fluent</p></div>
    </div>
    <div className="capabilities"><h3>What I work with</h3>{[
      { name: 'Frontend', text: 'Angular, AngularJS, TypeScript, JavaScript, HTML5, CSS, Bootstrap, jQuery, GrapesJS' },
      { name: 'Backend & integrations', text: 'PHP, Laravel, Slim, C#, ASP.NET, REST APIs, Google Drive API' },
      { name: 'Databases', text: 'MySQL, MariaDB, SQL Server, PostgreSQL, database design and SQL optimization' },
      { name: 'Delivery & collaboration', text: 'Git, GitHub, AWS, Postman, Agile/Scrum, Jira, ClickUp, application support and QA' },
    ].map(capability => <div className="capability" key={capability.name}><h4>{capability.name}</h4><p>{capability.text}</p></div>)}</div>
  </div></section>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch { window.location.href = 'mailto:' + email; }
  }
  return <footer id="contact" className="contact section-pad"><div className="page-width">
    <div className="contact-top"><p>Ready to build what’s next</p><a href="https://linkedin.com/in/whinlo" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://github.com/whinlopez06" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div>
    <h2>Let’s build something<br />useful together.</h2>
    <div className="email-row">
      <div className="contact-addresses"><a className="email-link" href={'mailto:' + email}>{email}<Arrow diagonal /></a><a className="phone-link" href="tel:+639176765499">+63 917 676 5499</a></div>
      <button onClick={copy} className="copy-button" aria-label={copied ? 'Email copied' : 'Copy email address'}>{copied && <Check size={18} aria-hidden="true" />}<span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span></button>
    </div>
    <div className="footer-bottom"><span className="footer-name">Erwin Lopez.</span><span>Quezon City, Philippines 1125</span><a href="#top">Back to top <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </div></footer>;
}

function Home() {
  return <><main id="main" tabIndex={-1}><Hero /><Experience /><SelectedWork /><About /></main><Contact /></>;
}

function Content() {
  const { pathname, hash } = useLocation();
  const wrapper = useRef<HTMLDivElement>(null);
  const previousPath = useRef(pathname);
  const oldProject = pathname.startsWith('/work/') ? projects.find(project => project.id === pathname.split('/')[2]) : undefined;
  useEffect(() => {
    document.title = pathname === '/' || oldProject ? 'Erwin Lopez — Fullstack Developer' : 'Page not found — Erwin Lopez';
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id: string;
        try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
        const target = document.getElementById(id === 'selected-work' ? 'work' : id);
        if (target instanceof HTMLDetailsElement) target.open = true;
        target?.scrollIntoView({ behavior: 'instant' });
      } else if (previousPath.current !== pathname) window.scrollTo({ top: 0, behavior: 'instant' });
      previousPath.current = pathname;
    });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    wrapper.current?.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [pathname, hash, oldProject]);
  if (oldProject) return <Navigate to={'/#project-' + oldProject.id} replace />;
  return <div ref={wrapper} id="top"><a className="skip-link" href="#main">Skip to content</a><Header />
    {pathname === '/' ? <Home /> : <main id="main" className="not-found page-width"><h1>Page not found.</h1><Link className="button" to="/">Back to the portfolio<Arrow /></Link></main>}
  </div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter basename="/whinlopez-portfolio"><Content /></BrowserRouter></React.StrictMode>);

