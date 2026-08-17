/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** CRM / scheduling endpoint the closing-CTA email capture POSTs to. */
  readonly PUBLIC_JV_LEAD_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
