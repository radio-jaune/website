import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import preact from "@astrojs/preact";
import robotsTxt from "astro-robots-txt";
let ASTRO_BASE_CONFIG_ARRAY = process.env.DEPLOYMENT_ASTRO_BASE_CONFIG.split(`/`);
export const myDEPLOYMENT_ASTRO_SITE_CONFIG = process.env.DEPLOYMENT_ASTRO_SITE_CONFIG;
export const myDEPLOYMENT_ASTRO_BASE_CONFIG = `/${ASTRO_BASE_CONFIG_ARRAY[ASTRO_BASE_CONFIG_ARRAY.length - 1]}`;
console.log(` --->>> DEPLOYMENT_ASTRO_SITE_CONFIG = [${myDEPLOYMENT_ASTRO_SITE_CONFIG}]`);
console.log(` --->>> DEPLOYMENT_ASTRO_BASE_CONFIG = [${myDEPLOYMENT_ASTRO_BASE_CONFIG}]`);


// https://astro.build/config
export default defineConfig({
  // site: "https://astro-moon-landing.netlify.app/",
  site: `${myDEPLOYMENT_ASTRO_SITE_CONFIG || ''}`,
  base: `${myDEPLOYMENT_ASTRO_BASE_CONFIG || ''}`,
  integrations: [tailwind(), icon(), preact({
    compat: true
  }), robotsTxt()]
});