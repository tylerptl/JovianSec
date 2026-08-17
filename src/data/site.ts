/**
 * All homepage copy. Copy is final per the design handoff — edit here, not in
 * the components.
 */

export const site = {
  name: 'Jovian Security',
  domain: 'joviansec.com',
  tagline: 'Offensive security & security engineering',
  description:
    'Penetration testing, red teaming, embedded security engineering and AI system work, run by senior operators. Nothing subcontracted.',
} as const;

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Research', href: '#research' },
  { label: 'Method', href: '#method' },
  { label: 'Company', href: '#company' },
] as const;

/** The four Galilean moons, in orbital order — the site's four service lines. */
export type ServiceLine = {
  moon: string;
  /** Which palette token paints the moon's dot. */
  dot: 'accent' | 'rust' | 'rust-dim' | 'accent-dim';
  /** One-liner for the strip under the hero. */
  short: string;
  title: string;
  description: string;
  duration: string;
};

export const serviceLines: ServiceLine[] = [
  {
    moon: 'Io',
    dot: 'accent',
    short: 'Network, web and API penetration testing',
    title: 'Penetration testing',
    description:
      'Authenticated multi-role testing of web and API surfaces, internal and external networks, and the hybrid estate between them. Business-logic abuse, not just a scanner pass.',
    duration: '2–3 weeks',
  },
  {
    moon: 'Europa',
    dot: 'rust',
    short: 'Red teaming and adversary simulation',
    title: 'Red teaming & adversary simulation',
    description:
      'Objective-based operations against the live environment, threat-informed and mapped to ATT&CK. Run dark, or in purple mode alongside your defenders.',
    duration: '4–8 weeks',
  },
  {
    moon: 'Callisto',
    dot: 'rust-dim',
    short: 'Embedded and AI security engineering',
    title: 'Embedded & AI security engineering',
    description:
      'Firmware, board-level and radio work on deployed edge hardware, including tactical kit that has to hold up off-network and under contest.',
    duration: 'Scoped',
  },
  {
    moon: 'Ganymede',
    dot: 'accent-dim',
    short: 'AI & LLM system development & integration',
    title: 'AI & LLM system development & integration',
    description:
      'Building and integrating model-backed systems with the evaluation harnesses, tool-permission boundaries and guardrails the deployment actually needs.',
    duration: 'Retained',
  },
];

export const methodSteps = [
  {
    step: '01',
    title: 'Scope',
    body: 'A 30-minute call with the operator who will run the test. Written scope, fixed price, named dates.',
  },
  {
    step: '02',
    title: 'Operate',
    body: 'Daily notes in your channel. Critical findings are reported the hour they are confirmed, not at the end.',
  },
  {
    step: '03',
    title: 'Report',
    body: 'Reproduction steps, evidence, and a fix an engineer can action. A separate summary for the audit trail.',
  },
  {
    step: '04',
    title: 'Retest',
    body: 'Every finding retested once your fixes land, included in the original price. Letter reissued on close.',
  },
] as const;

export const stats = [
  { value: '240+', label: 'Engagements delivered' },
  { value: '31', label: 'CVEs credited to the team' },
  { value: '11 yrs', label: 'Median operator experience' },
  { value: '0', label: 'Tests subcontracted out' },
] as const;

/**
 * Advisory list. Shaped so it can be swapped for a CMS fetch without touching
 * the markup: id, title, and either a CVSS severity or the "Tooling" tag.
 */
export type Advisory = {
  id: string;
  title: string;
  severity?: string;
  tag?: string;
  href: string;
};

export const advisories: Advisory[] = [
  {
    id: 'CVE-2026-3181',
    title: 'Auth bypass in a widely deployed API gateway',
    severity: '9.1',
    href: '#',
  },
  {
    id: 'CVE-2026-2904',
    title: 'Privilege escalation via workload identity federation',
    severity: '8.4',
    href: '#',
  },
  {
    id: 'JS-ADV-041',
    title: 'Detection pack: token replay in SSO brokers',
    tag: 'Tooling',
    href: '#',
  },
];

export const credentials = ['OSCP', 'OSAI', 'CISSP'] as const;

export const footerLinks = [
  { label: 'Disclosure policy', href: '#' },
  { label: 'PGP key', href: '#' },
  { label: 'security.txt', href: '#' },
] as const;
