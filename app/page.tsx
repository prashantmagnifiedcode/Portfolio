"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("opacity-0")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-colors duration-300 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0 transition-opacity duration-500 pt-8 sm:pt-0"
        >
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 w-full">
            <div className="lg:col-span-3 space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-sm text-muted-foreground font-mono tracking-wider mt-4 sm:mt-0">
                  PORTFOLIO / 2025
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight">
                  Prashant
                  <br />
                  <span className="text-muted-foreground">Srivastava</span>
                </h1>
              </div>
              <div className="relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm group hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/25">
                {/* Liquid glass effect background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                {/* Animated pulse ring */}
                <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse group-hover:border-blue-300/40 transition-colors duration-300"></div>

                <div className="flex items-center gap-2 relative z-10">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse group-hover:animate-ping transition-all duration-300"></div>
                  <span className="text-xs sm:text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    2+ Years Experience
                  </span>
                </div>
                <div className="w-px h-3 sm:h-4 bg-border relative z-10"></div>
                <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 relative z-10">
                  Full-Stack Developer
                </span>

                {/* Floating particles effect */}
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
              </div>

           

              <div className="space-y-4 sm:space-y-6 max-w-md">
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Software Engineer crafting scalable applications at the intersection of
                  <span className="text-foreground"> React Native</span>,
                  <span className="text-foreground"> MERN Stack</span>, and
                  <span className="text-foreground"> full-stack development</span>.
                </p>

                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground font-mono">RESUME</div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <a
                      href="/resume/Prashant_Srivastava_Resume.pdf"
                      download="Prashant_Srivastava_Resume.pdf"
                      className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download PDF
                    </a>
                    <a
                      href="/resume/Prashant_Srivastava_Resume.docx"
                      download="Prashant_Srivastava_Resume.docx"
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-muted-foreground/50 hover:bg-muted/50 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-4 4m4-4H3"
                        />
                      </svg>
                      Download DOC
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 lg:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Available for work
                  </div>
                  <div>New Delhi, India</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-4 sm:space-y-6 lg:space-y-8 mt-6 sm:mt-8 lg:mt-0">
              <div className="space-y-3 sm:space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">React Native & React JS Developer</div>
                  <div className="text-muted-foreground">@ LogEdgeSystems PVT .LTD</div>
                  <div className="text-xs text-muted-foreground">Aug 2023 — Present</div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-light text-foreground">15+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-foreground">3</div>
                    <div className="text-xs text-muted-foreground">Companies</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["React Native", "React", "Node.js", "MongoDB", "Python"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-200 whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-16 sm:py-20 lg:py-32 opacity-0 transition-opacity duration-500"
        >
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light">Work Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2023 — 2025</div>
            </div>

            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {[
                {
                  year: "2023",
                  duration: "Aug 2023 — Present",
                  role: "React Native & React JS Developer",
                  company: "LogEdgeSystems PVT .LTD",
                  subtitle: "(Pristine Group)",
                  description:
                    "Developed cross-platform CRM and inspection apps with real-time analytics, custom calendar features, and role-based access control. Built scalable backend APIs and implemented serverless PDF generation using Puppeteer.",
                  achievements: [
                    "Built CRM app with real-time analytics dashboard tracking leads (won, lost, in-progress)",
                    "Designed custom calendar features with advanced filtering capabilities",
                    "Implemented RBAC system for user hierarchy-based access control",
                    "Created serverless PDF generation with Google Cloud integration",
                  ],
                  tech: [
                    { name: "React Native", category: "mobile" },
                    { name: "React", category: "frontend" },
                    { name: "Node.js", category: "backend" },
                    { name: "Puppeteer", category: "tool" },
                    { name: "Google Cloud", category: "cloud" },
                    { name: "RESTful APIs", category: "backend" },
                  ],
                },
                {
                  year: "2023",
                  duration: "6-Month Internship",
                  role: "MERN Developer",
                  company: "Spontomtech Private Limited",
                  subtitle: "",
                  description:
                    "Worked on comprehensive Hospital Application with multiple modules including billing system, work tracking, admin panel, and various healthcare management features.",
                  achievements: [
                    "Developed hospital management system with billing integration",
                    "Built work tracking system for healthcare staff",
                    "Created admin panel for system management",
                    "Implemented various healthcare-specific modules",
                  ],
                  tech: [
                    { name: "MongoDB", category: "database" },
                    { name: "Express", category: "backend" },
                    { name: "React", category: "frontend" },
                    { name: "Node.js", category: "backend" },
                  ],
                },
                {
                  year: "2022",
                  duration: "3-Month Internship",
                  role: "MERN Developer (Intern)",
                  company: "Hubx Commercial Ventures Pvt. Ltd.",
                  subtitle: "",
                  description:
                    "Designed and developed Hubx website with integrated blog functionality, data management systems, and advanced form validation features.",
                  achievements: [
                    "Designed and built complete Hubx website",
                    "Integrated Medium Blog for content management",
                    "Implemented Google Sheets integration for data synchronization",
                    "Developed registration forms with advanced validation",
                  ],
                  tech: [
                    { name: "React", category: "frontend" },
                    { name: "Node.js", category: "backend" },
                    { name: "Express", category: "backend" },
                    { name: "Material-UI", category: "ui" },
                    { name: "UIKIT CSS", category: "ui" },
                  ],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 lg:p-8 border border-border/50 rounded-xl hover:border-border hover:shadow-lg transition-all duration-300 bg-background/50"
                >
                  <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
                    <div className="lg:col-span-3 space-y-2">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground">{job.year}</div>
                      <div className="text-sm text-muted-foreground font-mono">{job.duration}</div>
                    </div>

                    <div className="lg:col-span-9 space-y-4 sm:space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground">{job.role}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="text-base sm:text-lg text-muted-foreground">{job.company}</span>
                          {job.subtitle && <span className="text-sm text-muted-foreground/70">{job.subtitle}</span>}
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{job.description}</p>

                      <div className="space-y-3">
                        <div className="text-sm font-medium text-foreground">Key Achievements:</div>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="text-sm font-medium text-foreground">Technologies Used:</div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {job.tech.map((tech, idx) => {
                            const categoryColors = {
                              frontend: "bg-blue-500/20 text-white border-blue-500/30",
                              backend: "bg-green-500/20 text-white border-green-500/30",
                              mobile: "bg-purple-500/20 text-white border-purple-500/30",
                              database: "bg-orange-500/20 text-white border-orange-500/30",
                              cloud: "bg-cyan-500/20 text-white border-cyan-500/30",
                              ui: "bg-pink-500/20 text-white border-pink-500/30",
                              tool: "bg-yellow-500/20 text-white border-yellow-500/30",
                            }

                            return (
                              <span
                                key={idx}
                                className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium border rounded-full transition-colors duration-200 whitespace-nowrap ${
                                  categoryColors[tech.category as keyof typeof categoryColors] ||
                                  "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20"
                                }`}
                              >
                                {tech.name}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-16 sm:py-20 lg:py-32 opacity-0 transition-opacity duration-500"
        >
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light">Featured Projects</h2>

            <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "CRM Application",
                  excerpt:
                    "Cross-platform CRM app with real-time analytics dashboard, custom calendar features, and role-based access control system.",
                  tech: "React Native, Node.js, APIs",
                  category: "Mobile App",
                },
                {
                  title: "Container Inspection App",
                  excerpt:
                    "Logistics inspection app for container gate-in/gate-out with serverless PDF generation and Google Cloud integration.",
                  tech: "React, Puppeteer, GCP",
                  category: "Web App",
                },
                {
                  title: "Data Grid Panel (MUI)",
                  excerpt:
                    "Custom data grid with advanced functionalities including pagination, cell editing, error handling, and three specialized variants.",
                  tech: "React, Material-UI, TypeScript",
                  category: "Component Library",
                },
                {
                  title: "Remote Working Platform",
                  excerpt:
                    "MERN stack platform with role-based access for Admin, Supervisor, Recruiter, and Employee with comprehensive job management tools.",
                  tech: "MongoDB, Express, React, Node.js",
                  category: "Full Stack",
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="p-4 sm:p-6 lg:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground font-mono">
                      <span>{project.category}</span>
                      <span className="text-right">{project.tech}</span>
                    </div>

                    <h3 className="text-base sm:text-lg lg:text-xl font-medium hover:text-muted-foreground transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      <span>View details</span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transform hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="py-16 sm:py-20 lg:py-32 opacity-0 transition-opacity duration-500"
        >
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light">Let's Connect</h2>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and
                  software development.
                </p>

                <div className="p-4 sm:p-6 border border-border rounded-xl bg-muted/20 space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-lg font-medium text-foreground">Resume</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Download my complete resume with detailed work experience, projects, and technical skills.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/resume/Prashant_Srivastava_Resume.pdf"
                      download="Prashant_Srivastava_Resume.pdf"
                      className="flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      PDF Format
                      <span className="text-xs opacity-75">(Recommended)</span>
                    </a>
                    <a
                      href="/resume/Prashant_Srivastava_Resume.docx"
                      download="Prashant_Srivastava_Resume.docx"
                      className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg hover:border-muted-foreground/50 hover:bg-muted/50 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-4 4m4-4H3"
                        />
                      </svg>
                      Word Document
                    </a>
                    <a
                      href="/resume/Prashant_Srivastava_Resume.txt"
                      download="Prashant_Srivastava_Resume.txt"
                      className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg hover:border-muted-foreground/50 hover:bg-muted/50 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Plain Text
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link
                    href="mailto:prashantsrivastava5116@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-200"
                  >
                    <span className="text-sm sm:text-base lg:text-lg break-all">prashantsrivastava5116@gmail.com</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transform hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-sm sm:text-base lg:text-lg">+91 7827677523</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      name: "GitHub",
                      handle: "@prashantmagnifiedcode",
                      url: "https://github.com/prashantmagnifiedcode",
                    },
                    {
                      name: "LinkedIn",
                      handle: "prashant-srivastava",
                      url: "https://www.linkedin.com/in/prashant-srivastava-7164ba211",
                    },
                    { name: "Email", handle: "prashantsrivastava5116", url: "mailto:prashantsrivastava5116@gmail.com" },
                    { name: "Phone", handle: "+91 7827677523", url: "tel:+917827677523" },
                  ].map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      className="p-3 sm:p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-200 hover:shadow-sm"
                    >
                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-sm sm:text-base text-foreground hover:text-muted-foreground transition-colors duration-200">
                          {social.name}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground break-all">{social.handle}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 sm:py-12 lg:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Prashant Srivastava. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://www.linkedin.com/messaging/compose/?recipient=prashant-srivastava-7164ba211&message=Hi%20Prashant%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20impressed%20with%20your%20work%20in%20React%20Native%20and%20full-stack%20development.%20I%27d%20love%20to%20connect%20and%20discuss%20potential%20opportunities%21"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-xl bg-gradient-to-br from-blue-500/20 via-blue-600/30 to-purple-600/20 border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 hover:rotate-3"
        >
          {/* Liquid glass effect background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

          {/* Animated pulse ring */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping group-hover:border-blue-300/50"></div>

          {/* LinkedIn icon */}
          <svg
            className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/80 text-white text-xs rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Connect on LinkedIn
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
          </div>
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://www.linkedin.com/messaging/compose/?recipient=prashant-srivastava-7164ba211&message=Hi%20Prashant%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20impressed%20with%20your%20work%20in%20React%20Native%20and%20full-stack%20development.%20I%27d%20love%20to%20connect%20and%20discuss%20potential%20opportunities%21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
