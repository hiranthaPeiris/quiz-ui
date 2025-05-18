// vite-env.d.ts
/// <reference types="vite/client" />

// Extend the existing ImportMetaEnv
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // Add your custom env vars here
}