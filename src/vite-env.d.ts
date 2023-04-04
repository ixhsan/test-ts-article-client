/// <reference types="vite/client" />

// declare namespace NodeJS {
  // interface ProcessEnv {
    //types of envs
//     NODE_ENV: "development" | "production" | "test";
//     PUBLIC_URL: string;
//     VITE_API_KEY: string;
//   }
// }

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_BASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
