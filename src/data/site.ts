/**
 * All homepage copy. Copy is final per the design handoff — edit here, not in
 * the components.
 */

export const site = {
  name: 'Jovian Security',
  domain: 'joviansec.com',
  tagline: 'Offensive security & security engineering',
  description:
    'Penetration testing, red teaming, system security engineering for embedded and AI systems, and AI/LLM development, run by senior operators. Nothing subcontracted.',
} as const;

/* Root-relative so the bar works from the service pages, not just the homepage. */
export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Research', href: '/#research' },
  { label: 'Method', href: '/#method' },
  { label: 'Company', href: '/#company' },
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
  /** The line's own page, under /services/. Matches `slug` in data/services.ts. */
  slug: string;
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
    slug: 'io',
  },
  {
    moon: 'Europa',
    dot: 'rust',
    short: 'Red teaming and adversary simulation',
    title: 'Red teaming & adversary simulation',
    description:
      'Objective-based operations against the live environment, threat-informed and mapped to ATT&CK. Run dark, or in purple mode alongside your defenders.',
    duration: '4–8 weeks',
    slug: 'europa',
  },
  {
    moon: 'Callisto',
    dot: 'rust-dim',
    short: 'System security engineering for embedded & AI systems',
    title: 'System security engineering',
    description:
      'System security engineering for embedded and AI systems, contextualized with the operational reality of your environment — the hardware they run on, the constraints they carry, the requirements they must meet.',
    duration: 'Scoped',
    slug: 'callisto',
  },
  {
    moon: 'Ganymede',
    dot: 'accent-dim',
    short: 'AI & LLM system development & integration',
    title: 'AI & LLM system development & integration',
    description:
      'Building and integrating model-backed systems that stay affordable to run and reusable across deployments. Security and privacy are baked into the requirements, not retrofitted after launch.',
    duration: 'Retained',
    slug: 'ganymede',
  },
];

export const methodSteps = [
  {
    step: '01',
    title: 'Scope',
    body: 'A 30-minute call with the operator who will run the test. Written scope, named dates, and next steps.',
  },
  {
    step: '02',
    title: 'Operate',
    body: 'Daily comms in your channel. Relevant assessment updates are reported the hour they are confirmed, not at the end.',
  },
  {
    step: '03',
    title: 'Report',
    body: 'Reproduction steps, evidence, and a fix an engineer can action. A separate summary for the audit trail.',
  },
  {
    step: '04',
    title: 'Retest',
    body: 'Every finding retested once your fixes land, included in the original price. Vulnerability report reissued on close.',
  },
] as const;

/**
 * The "How the lines connect" band, from the handoff in `design/flow-1a.html`.
 *
 * `sequence` is the lit arc, in hand-off order — Europa → Io → Callisto. It is
 * exactly three entries long and the order is load-bearing: ServiceFlow.astro
 * pins each one to a fixed position in the diagram's coordinate space, so
 * adding or reordering entries needs the geometry redrawn, not just this list.
 * Ganymede sits off the arc, on its own.
 *
 * `stackLabel` is the same line written out for the stacked narrow-viewport
 * list, which is also the diagram's accessible copy; `desc` is shared by both.
 */
export const serviceFlow = {
  kicker: 'How the lines connect',
  intro:
    'Each line feeds the next, so findings carry forward without a re-scope — and any line can be engaged on its own.',
  /** Sits between each pair of moons, on the arc. */
  feeds: 'feeds',
  /** Heads the dashed stubs dropping into each moon. */
  entry: 'Enter at any line',
  sequence: [
    {
      key: 'europa',
      moon: 'Europa',
      dot: 'rust',
      line: 'Red teaming & adversary simulation',
      stackLabel: 'Europa — red teaming & adversary simulation',
      desc: 'Objective-based operations surface the paths that matter and the systems they run through.',
    },
    {
      key: 'io',
      moon: 'Io',
      dot: 'accent',
      line: 'Penetration testing',
      stackLabel: 'Io — penetration testing',
      desc: "Those systems get tested to depth, with the adversary's route already known.",
    },
    {
      key: 'callisto',
      moon: 'Callisto',
      dot: 'rust-dim',
      line: 'System security engineering',
      stackLabel: 'Callisto — system security engineering',
      desc: 'Findings become engineering for the embedded and AI systems underneath — the hardware they run on, the constraints they carry.',
    },
  ],
  ganymede: {
    dot: 'accent-dim',
    /** Under the short dashed arc, below the sequence. */
    title: 'Ganymede — its own orbit',
    desc: 'AI & LLM system development & integration. Engaged on its own terms, with adversary simulation, testing and security engineering baked into the requirements.',
    stackLabel: 'Ganymede — AI & LLM system development & integration',
    /** The stack carries the title's second sentence only — the first is the label. */
    stackDesc:
      'Engaged on its own terms, with adversary simulation, testing and security engineering baked into the requirements.',
  },
  /** Closes the stacked list. */
  summary: 'Each line feeds the next; any line can be engaged on its own.',
} as const;

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
