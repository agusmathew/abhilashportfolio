"use client";

import { useRef, useState } from "react";

const skills = [
  "Manual testing",
  "Writing test cases",
  "Reporting bugs",
  "Python",
  "JavaScript",
  "C",
  "Black box testing",
  "Functional testing",
  "Regression testing",
  "SPSS",
  "Excel (data validation and analysis)",
  "Agile methodology",
  "Test plan creation",
  "Report writing",
  "Quick-learning",
  "Test documentation",
  "Cross-browser testing",
  "Git proficiency",
  "Automated testing",
];

const experience = [
  {
    period: "March 2025 - Present",
    title: "Software QA Tester",
    company: "Finbogo, Altrincham, Manchester",
    highlights: [
      "Partnered with project managers across planning, delivery, and release cycles.",
      "Designed comprehensive test plans, scenarios, and procedures to elevate quality.",
      "Logged and tracked defects in JIRA, improving visibility and resolution speed.",
      "Executed manual testing across critical workflows and regression suites.",
      "Collaborated with developers to resolve issues and identify design gaps.",
      "Created Playwright E2E automation scripts to cover high-risk flows.",
      "Supported UAT sessions, capturing client feedback and functional issues.",
    ],
  },
  {
    period: "October 2023 - March 2025",
    title: "Research Assistant",
    company: "University of Bolton",
    highlights: [
      "Validated large datasets, ensuring accuracy through systematic error checks.",
      "Applied psychological research methods to improve UX insights.",
      "Delivered structured reports with actionable findings and documentation.",
      "Collaborated with a research team to meet project milestones.",
    ],
  },
  {
    period: "October 2019 - December 2021",
    title: "Freelance Software Tester",
    company: "Freelance, India",
    highlights: [
      "E-commerce testing: functional flows, cross-browser validation, and bug reporting.",
      "SaaS regression testing: dashboards, permissions, and API response validation.",
      "CRM functional testing: lead management, access control, and data integrity checks.",
      "LMS testing: enrollment, video playback, quizzes, certificates, and accessibility.",
    ],
  },
];

const education = [
  {
    year: "December 2023",
    title: "MSc in Psychology (Conversion)",
    school: "University of Bolton",
  },
  {
    year: "December 2017",
    title: "B.Tech in Computer Science & Engineering",
    school: "Government Engineering College Sreekrishnapuram",
  },
];

export default function Home() {
  const [isHireOpen, setIsHireOpen] = useState(false);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const noContainerRef = useRef<HTMLDivElement | null>(null);

  const moveNoButton = () => {
    const container = noContainerRef.current;
    if (!container) return;
    const bounds = container.getBoundingClientRect();
    const maxX = Math.max(0, bounds.width - 110);
    const maxY = Math.max(0, bounds.height - 48);
    const nextX = Math.floor(Math.random() * (maxX + 1));
    const nextY = Math.floor(Math.random() * (maxY + 1));
    setNoOffset({ x: nextX, y: nextY });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full glow-orb" />
      <div className="pointer-events-none absolute right-[-160px] top-[120px] h-[420px] w-[420px] rounded-full glow-orb secondary" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:px-12 lg:px-16">
        <section className="section-card fade-in rounded-[32px] p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--secondary)]">
                Software QA Tester
              </p>
              <div>
                <h1 className="text-4xl font-semibold text-[color:var(--foreground)] md:text-5xl">
                  Abhilash Sivadasan
                </h1>
                <p className="mt-4 max-w-xl text-lg text-[color:var(--muted)]">
                  Results-driven QA tester with deep expertise in manual and automated
                  testing. Known for delivering reliable releases, reducing critical
                  bugs by 90%, and collaborating closely with cross-functional teams
                  to craft exceptional user experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-[color:var(--foreground)]">
                <span className="rounded-full border border-[color:var(--stroke)] px-4 py-2">
                  Manchester M33 4QS
                </span>
                <a
                  className="rounded-full border border-[color:var(--stroke)] px-4 py-2 transition hover:border-transparent hover:bg-[color:var(--accent)] hover:text-white"
                  href="tel:+447423691597"
                >
                  +44 7423 691597
                </a>
                <a
                  className="rounded-full border border-[color:var(--stroke)] px-4 py-2 transition hover:border-transparent hover:bg-[color:var(--accent)] hover:text-white"
                  href="mailto:abhilashabi15@gmail.com"
                >
                  abhilashabi15@gmail.com
                </a>
              </div>
            </div>
            <div className="flex w-full max-w-xs flex-col gap-4 rounded-3xl border border-[color:var(--stroke)] bg-white/70 p-6 text-sm text-[color:var(--foreground)]">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--secondary)]">
                QA Highlights
              </p>
              <div className="text-3xl font-semibold text-[color:var(--accent-dark)]">
                90%
              </div>
              <p>
                Reduction in critical bugs through rigorous manual testing,
                proactive documentation, and automation support.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                <span className="rounded-full bg-white px-3 py-1">Playwright E2E</span>
                <span className="rounded-full bg-white px-3 py-1">JIRA</span>
                <span className="rounded-full bg-white px-3 py-1">Agile QA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="fade-in grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="section-card rounded-[28px] p-8">
            <h2 className="text-2xl font-semibold">Core Skills</h2>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Hands-on QA skills spanning functional, regression, and automation
              testing along with reporting and collaboration.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[color:var(--stroke)] px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="section-card rounded-[28px] p-8">
            <h2 className="text-2xl font-semibold">Professional Summary</h2>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              QA specialist with a track record of designing structured test plans,
              writing precise test cases, and translating complex defects into
              actionable insights. Experienced in Agile delivery models, quick to
              learn new tools, and trusted to safeguard product quality from planning
              through release.
            </p>
            <div className="mt-6 rounded-2xl border border-[color:var(--stroke)] bg-white/70 p-4 text-sm">
              <p className="font-semibold">Testing Focus</p>
              <p className="mt-2 text-[color:var(--muted)]">
                Manual testing, Playwright automation, cross-browser coverage, and
                detailed test documentation.
              </p>
            </div>
          </div>
        </section>

        <section className="section-card fade-in rounded-[32px] p-8 md:p-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <p className="text-sm text-[color:var(--muted)]">
              Impactful roles across fintech QA, academic research, and freelance
              testing engagements.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            {experience.map((role) => (
              <div
                key={role.title}
                className="rounded-3xl border border-[color:var(--stroke)] bg-white/75 p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="text-sm text-[color:var(--muted)]">{role.company}</p>
                  </div>
                  <span className="text-sm uppercase tracking-[0.2em] text-[color:var(--secondary)]">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-4 list-disc pl-5 text-sm text-[color:var(--muted)]">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="fade-in grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="section-card rounded-[28px] p-8">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="mt-6 flex flex-col gap-4">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[color:var(--stroke)] bg-white/70 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--secondary)]">
                    {item.year}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-[color:var(--muted)]">{item.school}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card rounded-[28px] p-8">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              Open to QA roles and projects where quality, collaboration, and clear
              communication matter.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="rounded-2xl border border-[color:var(--stroke)] bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--secondary)]">
                  Phone
                </p>
                <a className="text-lg font-semibold" href="tel:+447423691597">
                  +44 7423 691597
                </a>
              </div>
              <div className="rounded-2xl border border-[color:var(--stroke)] bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--secondary)]">
                  Email
                </p>
                <a
                  className="text-lg font-semibold"
                  href="mailto:abhilashabi15@gmail.com"
                >
                  abhilashabi15@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-[color:var(--stroke)] bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--secondary)]">
                  Location
                </p>
                <p className="text-lg font-semibold">Manchester M33 4QS</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {isHireOpen && (
          <div className="section-card w-[280px] rounded-2xl p-4 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--secondary)]">
              Quick Question
            </p>
            <p className="mt-2 text-base font-semibold">Will you hire me?</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:abhilashabi15@gmail.com?subject=QA%20Role%20Opportunity"
                className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[color:var(--accent-dark)]"
              >
                Yes, let’s talk
              </a>
              <div
                ref={noContainerRef}
                onMouseMove={moveNoButton}
                onPointerMove={moveNoButton}
                className="relative h-[56px] w-full overflow-hidden rounded-full border border-[color:var(--stroke)] bg-white"
              >
                <button
                  onMouseEnter={moveNoButton}
                  onFocus={moveNoButton}
                  style={{ transform: `translate(${noOffset.x}px, ${noOffset.y}px)` }}
                  className="absolute left-2 top-2 rounded-full border border-[color:var(--stroke)] bg-white px-4 py-2 text-sm font-semibold transition"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsHireOpen((prev) => !prev)}
          className="rounded-full bg-[color:var(--foreground)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-black"
        >
          Will you hire me?
        </button>
      </div>
    </div>
  );
}
