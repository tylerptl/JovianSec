/**
 * Service-line page copy — one entry per line, rendered by
 * `pages/services/[moon].astro`. Same rule as site.ts: copy lives here, not in
 * the components.
 *
 * The `slug` is the URL (`/services/io`) and the `dot` is the palette token that
 * paints the line's mark, both matching the `serviceLines` entry in site.ts.
 * Keep the two in step — the homepage links here by slug.
 */

export type ServicePage = {
  slug: string;
  moon: string;
  /** Which palette token paints the line's dot. */
  dot: 'accent' | 'rust' | 'rust-dim' | 'accent-dim';
  title: string;
  duration: string;
  /** Page <title> suffix and meta description. */
  meta: string;
  lede: string;
  /** The numbered run of an engagement, rendered as the hairline grid. */
  phases: { step: string; title: string; body: string }[];
  /** Prose bands under the phases. */
  details: { kicker: string; heading: string; body: string[] }[];
  /** What lands at the end. */
  deliverables: { title: string; body: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: 'io',
    moon: 'Io',
    dot: 'accent',
    title: 'Penetration testing',
    duration: '2–3 weeks',
    meta: 'Authenticated, multi-role penetration testing run from an assessment plan written for your system — with complete kill chain documentation and artifacts for your authorizing body.',
    lede: 'Testing run from a plan written for your system, briefed to your stakeholders before anything is touched. Scanners are the floor of the work, not the work.',
    phases: [
      {
        step: '01',
        title: 'Plan',
        body: 'We build an assessment plan for the system or environment in front of us — surfaces, roles, trust boundaries, data flows — and brief it to your stakeholders before testing opens.',
      },
      {
        step: '02',
        title: 'Scope',
        body: 'Scope is fully defined in writing before the engagement starts: targets, windows, exclusions, escalation paths, and the evidence that has to be captured along the way.',
      },
      {
        step: '03',
        title: 'Test',
        body: 'Authenticated multi-role testing to depth across everything in scope. Chained authorization failures and business-logic abuse, not a scanner profile pointed at a hostname.',
      },
      {
        step: '04',
        title: 'Report',
        body: 'Every chain documented end to end, risk written against your environment, and the artifacts your authorizing body expects — packaged, not improvised at the end.',
      },
    ],
    details: [
      {
        kicker: 'Beyond the scanner pass',
        heading: 'A plan for your system, not a profile run against it',
        body: [
          'An industry scanner reports what it recognizes. It does not know which of your roles can reach which record, what your API does with a replayed token, or which finding is a foothold and which is noise. Running one and calling the system assessed is how estates stay breachable while the report stays clean.',
          'So the engagement starts with an assessment plan generated for the system or organization environment in scope: the surfaces that exist, the roles that use them, the boundaries between them, and the business logic that actually carries the risk. That plan is briefed to your stakeholders before testing begins, so the people who own the system agree on what holistic evaluation means for it — and can say what we have missed while there is still time to add it.',
        ],
      },
      {
        kicker: 'Current TTPs, current tooling',
        heading: 'The techniques tested are the ones being used',
        body: [
          'Operators track the MITRE ATT&CK updates as they land, and the breach reporting in the sectors our clients work in — what actually got someone this quarter, in your industry, is a better test plan input than a control catalogue.',
          'Tooling is chosen per engagement and per surface. Web application, network, mobile, cloud and IoT work each have their own moving toolchain, and operators stay current on all of them rather than inheriting the kit from last year because it is what the template says.',
        ],
      },
    ],
    deliverables: [
      {
        title: 'Vulnerability report',
        body: 'Every finding with reproduction steps, evidence, and a fix an engineer can action.',
      },
      {
        title: 'Complete kill chain documentation',
        body: 'Each chain from initial access to impact, step by step, with the artifacts captured at every stage.',
      },
      {
        title: 'Contextualized risk & impact',
        body: 'Severity written against your environment, your data and your users — not a raw score copied out of a database.',
      },
      {
        title: 'Authorizing-body artifacts',
        body: 'Evidence packaged for the reporting requirements you answer to: FedRAMP, DoD, DHS, or your own audit trail.',
      },
    ],
  },
  {
    slug: 'europa',
    moon: 'Europa',
    dot: 'rust',
    title: 'Red teaming & adversary simulation',
    duration: '4–8 weeks',
    meta: 'Objective-based adversary simulation built on a threat portfolio assembled for your organization, authorized in writing through MOU and ROE before any operation runs.',
    lede: 'Objective-based operations against the live environment, driven by a threat portfolio built for your organization and authorized in writing before anything runs.',
    phases: [
      {
        step: '01',
        title: 'Understand',
        body: 'The first and most urgent work is understanding: what you do, what you hold, which systems are in scope, and what has already happened to organizations like yours.',
      },
      {
        step: '02',
        title: 'Threat portfolio',
        body: 'That research becomes a portfolio — the actors plausibly interested in you, their objectives against your business, and the TTPs they are known to use, mapped to ATT&CK.',
      },
      {
        step: '03',
        title: 'Authorize',
        body: 'An MOU and rules of engagement go to your stakeholders for sign-off: objectives, boundaries, permitted techniques, deconfliction and abort conditions. Testing is authorized in writing or it does not happen.',
      },
      {
        step: '04',
        title: 'Operate',
        body: 'Objective-based operations run against the portfolio, in the live environment. Dark, or in purple mode alongside your defenders.',
      },
    ],
    details: [
      {
        kicker: 'The threat portfolio',
        heading: 'Research first, because the adversary already did it',
        body: [
          'Every engagement opens with the organization rather than the tooling. We work through what your business actually does, the systems in scope and what they carry, and the sector around you — including your competitors: who has been breached, by whom, through what, and what the intruder was after once inside.',
          'That becomes a threat portfolio: the actors with a plausible reason to come for you, the objectives they would pursue against your business, and the techniques they are known to use, mapped to ATT&CK. The operation is then run to that portfolio.',
          'It is also what makes the result legible to the people who fund the fixes. Reaching the payment records lands differently when the brief already named who wants them and why.',
        ],
      },
      {
        kicker: 'Authorized and deconflicted',
        heading: 'MOU and ROE before the first packet',
        body: [
          'A memorandum of understanding and rules of engagement are developed from the portfolio and signed off by your stakeholders before any authorized testing begins. They name the systems in and out of play, the techniques permitted, the operating hours, the deconfliction channel and the conditions under which we stop.',
          'Through the operation there is a named operator on our side and a standing channel on yours. If a defender escalates something at 2am, you can confirm or rule us out in minutes — which is also what makes the detection timeline in the report trustworthy afterwards.',
        ],
      },
    ],
    deliverables: [
      {
        title: 'Threat portfolio',
        body: 'The actors, objectives and techniques the operation was built from, with the sector research behind them.',
      },
      {
        title: 'Signed MOU & ROE',
        body: 'Scope, permitted techniques, deconfliction and abort conditions, agreed before the operation and kept on file after it.',
      },
      {
        title: 'Operation report',
        body: 'Objectives attempted, paths taken, and what each one would have cost you — written as a narrative an executive can follow.',
      },
      {
        title: 'Detection timeline',
        body: 'What fired, what did not, and when — the defensive half of the result, and the part that turns an operation into a roadmap.',
      },
    ],
  },
  {
    slug: 'callisto',
    moon: 'Callisto',
    dot: 'rust-dim',
    title: 'System security engineering',
    duration: 'Scoped',
    meta: 'System security engineering for embedded and AI systems — built alongside your developers and engineers, against the standards the system has to certify to, and handed off as a working proof-of-concept with a complete implementation pathway.',
    lede: 'System security engineering for embedded and AI systems. It starts in the room with your developers, engineers and product managers, and ends with a working proof-of-concept your teams can carry into production.',
    phases: [
      {
        step: '01',
        title: 'Sit with the team',
        body: 'We work alongside your developers, engineers and PMs — and your users where it applies — until we understand the operational requirements of the system, the product or the enterprise network, and what it has to certify against.',
      },
      {
        step: '02',
        title: 'Ingest',
        body: 'Findings from an Io test or a Europa operation feed straight in. Where a report already exists, the engineering starts from it instead of re-running the assessment.',
      },
      {
        step: '03',
        title: 'Prove it',
        body: 'The control gets built and demonstrated against your real constraints — the hardware it runs on, the latency it has to hold, the team that has to maintain it.',
      },
      {
        step: '04',
        title: 'Hand off',
        body: 'Each proof-of-concept ships with a complete breakdown of the implementation pathway: dependencies, sequencing, and the tradeoffs we hit so yours are not a surprise.',
      },
    ],
    details: [
      {
        kicker: 'Operational requirements first',
        heading: 'We work with the people who own the system',
        body: [
          'Security engineering that arrives as a document from outside the team gets implemented as far as it is convenient and no further. So we work inside the team instead — with the developers who will maintain the control, the engineers who know what the hardware will tolerate, the product managers who own the deadline, and, where it applies, the people who actually use the thing.',
          'What comes out of that is a shared understanding of the operational requirements: what the system has to do, what it runs on, what it cannot afford to lose, and where the room to change it actually is. Every recommendation after that is built against those constraints rather than around them.',
        ],
      },
      {
        kicker: 'The standards you answer to',
        heading: 'Engineering that has to certify, not just work',
        body: [
          'Systems that touch regulated data inherit its rules: cardholder data under PCI-DSS, protected health information under HIPAA, and personally identifiable information under whichever regime covers the people it describes. Those are engineering requirements, and we treat them as such — what the system may see, what it may retain, what leaves the boundary, and what has to be provable afterwards.',
          'Hardware programs carry a second set. Automotive work answers to ISO/SAE 21434, and to UN R155 where type approval is in play. Drone and air programs have their equivalents — the DO-326A and ED-202A airworthiness security process specifications, plus whatever the certifying authority adds on top.',
          'Establishing which of these applies before the architecture is fixed is the difference between a control that certifies and a retrofit that holds up a launch.',
        ],
      },
      {
        kicker: 'Proof, then pathway',
        heading: 'A working control and the route to production',
        body: [
          'The deliverable is a proof-of-concept that runs, not a diagram of one. It is built against your constraints and demonstrated to the teams who will own it.',
          'With it comes the implementation pathway, broken down completely: what has to change, in what order, what it depends on, what it will cost in performance or effort, and where we expect friction. Your development and engineering teams should be able to pick it up and ship it without a follow-on contract to interpret it.',
          'The other way in is a finished assessment. Outputs from Io and Europa are designed to ingest directly here, so a report does not stop at the finding — it continues into the engineering that closes it.',
        ],
      },
      {
        kicker: 'Why we do it this way',
        heading: 'Security outcomes that let you serve your clients better',
        body: [
          'The point of the work is not the control diagram. It is that your product keeps doing the thing your customers depend on it for, under conditions you have already tested. Security that stops delivery is a failure with better paperwork.',
          'We build toward outcomes you can spend: approvals that move faster, fewer emergencies pulling your engineers off the roadmap, and evidence you can put in front of a client who asks how their data is handled. Our job is to leave you more able to serve the people you serve — not more compliant on paper.',
        ],
      },
    ],
    deliverables: [
      {
        title: 'Operational requirements brief',
        body: 'What we learned working alongside your team, and the standards the system answers to — written down and agreed before anything is engineered.',
      },
      {
        title: 'Working proof-of-concept',
        body: 'The control built and demonstrated against your constraints, on the hardware or in the environment it has to live in.',
      },
      {
        title: 'Implementation pathway',
        body: 'A complete breakdown for handoff: dependencies, sequencing, tradeoffs and the friction to expect.',
      },
      {
        title: 'Handoff to your engineers',
        body: 'A working session with the teams who will own it, so the pathway leaves with the people who have to walk it.',
      },
    ],
  },
  {
    slug: 'ganymede',
    moon: 'Ganymede',
    dot: 'accent-dim',
    title: 'AI & LLM system development & integration',
    duration: 'Retained',
    meta: 'Model-backed systems built and integrated alongside your team — scoped to one outcome, with security and privacy written into the requirements rather than retrofitted after launch.',
    lede: 'Model-backed systems built alongside your team and integrated into your organization — scoped to one outcome, with security and privacy written in from the first requirement.',
    phases: [
      {
        step: '01',
        title: 'Requirements',
        body: 'The first work is what the system may see, retain and send: your data boundaries, your retention rules, and the decisions a person has to make rather than a model. Those become system requirements before a model is chosen.',
      },
      {
        step: '02',
        title: 'Target the outcome',
        body: 'One outcome, named and measurable — the decision made faster, the queue cleared, the review automated. Systems that exist to have AI in them get built and then abandoned.',
      },
      {
        step: '03',
        title: 'Build & integrate',
        body: 'We build into your systems and your organization: your data boundaries, your identity model, your review steps, with the evaluation harnesses and tool-permission boundaries the deployment needs.',
      },
      {
        step: '04',
        title: 'Stay',
        body: 'Retained alongside your team through deployment and after it. The model landscape moves quarterly and your obligations move with your business.',
      },
    ],
    details: [
      {
        kicker: 'Security and privacy as requirements',
        heading: 'Decided before there is anything to migrate',
        body: [
          'What the system may see, what it may retain, what leaves your boundary and what a person has to approve — settled at the requirements stage, where each one is a design constraint. Discovered after launch, the same questions are a migration.',
          'Where your operations put the system under a specific regime — regulated data, or hardware that has to certify — that requirements work runs on the Callisto line alongside this one.',
        ],
      },
      {
        kicker: 'Integrated, not delivered',
        heading: 'Built alongside your team, into your organization',
        body: [
          'This line sits closer than the others. We work inside your deployment: your data stores, your identity and access model, your existing review steps and the people who perform them, so the system arrives as part of how the organization already works rather than as a service it has to adopt.',
          'That includes the parts that are not software — who reviews what, what happens when the model is wrong, and how the people using it know which is which.',
        ],
      },
      {
        kicker: 'Affordable and reusable',
        heading: 'Built to run for years, not to demo once',
        body: [
          'Inference cost is a design constraint from the first architecture conversation, not a surprise on a later invoice. We size the system to the outcome it has to produce and pick models accordingly.',
          'And we build for reuse: the evaluation harnesses, guardrails and integration patterns from the first deployment are the starting point for the second, so the marginal system costs a fraction of the original.',
        ],
      },
    ],
    deliverables: [
      {
        title: 'Requirements map',
        body: 'What the system may see, retain, send and decide on its own — agreed in writing before the build starts.',
      },
      {
        title: 'The integrated system',
        body: 'Built into your environment against your identity model and data boundaries, delivering the outcome it was scoped for.',
      },
      {
        title: 'Evaluation harness & guardrails',
        body: 'How the system is measured, what it is not permitted to do, and the tests that prove both — reusable for the next deployment.',
      },
      {
        title: 'Retained support',
        body: 'A named operator alongside your team after launch, as the models, the threats and your obligations keep moving.',
      },
    ],
  },
];
