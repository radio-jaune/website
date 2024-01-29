# Radio Jaune

## Locally run

```bash
pnpm run dev
```

## Release


```bash
export WHERE_I_WAS=$(pwd)
export WHERE_I_WORK=$(mktemp -d -t "POKUS_WHERE_I_WORK_XXXXXXXX")
git clone git@github.com:jean-baptiste-lasselle/whoami-web.git ${WHERE_I_WORK}
cd ${WHERE_I_WORK}
git checkout master
git flow init --defaults

# you  must be on develp : your feature branch must be suashed and merged

export RELEASE_VERSION="0.0.87"

git flow release start ${RELEASE_VERSION}
export GH_PAGES_DEPLOYMENT_DIR='docs'
export DEPLOYMENT_ASTRO_BASE_CONFIG="/website"
export DEPLOYMENT_ASTRO_SITE_CONFIG="https://radio-jaune.github.io"
export DEPLOYMENT_ASTRO_BASE_CONFIG=""
export DEPLOYMENT_ASTRO_SITE_CONFIG="https://website-ar7.pages.dev"

export NO_CNAME="true"
# export NO_CNAME="false"
# export CNAME_VALUE="example.com"
npm run build:prod:gh

git add -A && git commit -m "release [${RELEASE_VERSION}] - release and deployment" && git push -u origin HEAD

# git flow release finish ${RELEASE_VERSION} && git push -u origin --all  && git push -u origin --tags
git flow release finish -s ${RELEASE_VERSION} && git push -u origin --all  && git push -u origin --tags
```


<!--
# Astro Landing Page <picture><source media="(prefers-color-scheme: dark)" srcset="https://astro.build/assets/press/astro-icon-light.png"><source media="(prefers-color-scheme: light)" srcset="https://astro.build/assets/press/astro-icon-dark.png"><img align="right" valign="center" height="79" width="63" src="https://astro.build/assets/press/astro-icon-dark.png" alt="Astro logo" /></picture>

> An Astro + Tailwind CSS example/template for landing pages.

<div align="center">

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

</div>

![Screenshots of Astro Landing Page](screenshots.jpg)

## Features

- 💨 Tailwind CSS for styling
- 🎨 Themeable
  - CSS variables are defined in `src/styles/theme.css` and mapped to Tailwind classes (`tailwind.config.cjs`)
- 🌙 Dark mode
- 📱 Responsive (layout, images, typography)
- ♿ Accessible (as measured by https://web.dev/measure/)
- 🔎 SEO-enabled (as measured by https://web.dev/measure/)
- 🔗 Open Graph tags for social media sharing
- 💅 [Prettier](https://prettier.io/) setup for both [Astro](https://github.com/withastro/prettier-plugin-astro) and [Tailwind](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## Commands

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start local dev server at `localhost:4321`        |
| `npm run build`        | Build your production site to `./dist/`           |
| `npm run preview`      | Preview your build locally, before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro --help` | Get help using the Astro CLI                      |
| `npm run format`       | Format code with [Prettier](https://prettier.io/) |
| `npm run clean`        | Remove `node_modules` and build output            |

## Credits

- astronaut image
  - source: https://github.com/withastro/astro-og-image; note: this repo is not available anymore
- moon image
  - source: https://unsplash.com/@nasa
- other than that, a lot of material (showcase data, copy) was taken from official Astro sources, in particular https://astro.build/blog/introducing-astro/ and https://github.com/withastro/astro.build

-->
## Disable the astro dev toolbar

```bash
pnpm exec astro preferences disable devToolbar --global
```
