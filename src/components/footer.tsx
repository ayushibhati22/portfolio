import { personal } from '@/data/portfolio'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/social'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-[#e8c4c0]/40 py-12">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© {year} {personal.name}</p>

          <div className="flex gap-3">
            {[
              { href: personal.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
              { href: personal.github, label: 'GitHub', Icon: GitHubIcon },
              { href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                className="rounded-lg border border-border bg-[var(--color-yellow)] px-4 py-2 text-sm font-medium text-foreground transition-transform hover:scale-105"
              >
                {Icon ? <Icon className="inline h-4 w-4 mr-1.5" /> : null}
                {label}
              </a>
            ))}
          </div>

          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
