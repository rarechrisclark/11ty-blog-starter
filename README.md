# Rare - Blog Starter

This repository was initially intended for my personal website, but I have since transitioned to using Vitepress for my blog.

Despite this, I decided to make the repository public to support open-source learning. Enjoy exploring the code and features!

**Demo:** https://rare-blog-starter.rarechrisclark.com

<img src="/screenshot.jpg?raw=true" alt="Rare Blog Starter" width="600" />

## Technologies Used

- [11ty/eleventy](https://github.com/11ty/eleventy) is used for the static building (v3.0)
- [twbs/bootstrap](https://github.com/twbs/bootstrap) is used for styling (v5.3)
- [Shopify/liquid](https://github.com/Shopify/liquid) is used as the templating engine

## Features

- Fast Build: Assets are built in **under 10 seconds**... nice!
- Browser Friendly: Four hundos lighthouse score
- Theme Switcher: Light/Dark/System theme switcher based on [Alberto Roura's guide](https://albertoroura.com/building-a-theme-switcher-for-bootstrap/).
- Minimal Vanilla JS: Focus on minimal JavaScript usage.
- Optimized Images: Image processing and rendering with `srcset` for fast loading.
- Markdown Processing: Using [Markdown IT](https://github.com/markdown-it/markdown-it) for `.md` file processing.
- Pagination and Breadcrumbs: For better navigation.
- Local Search: Indexed by [MiniSearch](https://github.com/micpst/minisearch.

## Local Development

1. Clone the repository
  ```shell
  git clone https://github.com/rarechrisclark/rare-blog-starter.git
  cd rare-blog-starter
  ```
2. Install dependencies
```shell
npm install
```

3. Start the local development server
  ```shell
  npm run dev
  ```
4. Access the server: The development server will be running at http://localhost:8080.

Note:
> - The 11ty configuration is located in the `./config` directory for better organisation
> - The site metadata can be modified in the `./src/_data/meta.js`
> - The final built assets will be stored in `./_site`

## Deployment

This project is set up to be built and hosted as a static site. Recommended hosting services include Cloudflare Pages, GitHub Pages, or AWS S3.

1. Build the static assets
```shell
npm run build
```

2. Deploy the built assets to your chosen hosting service.
3. Have fun with it x

---

## Resources

### Site Inspiration

- [madrilene/eleventy-excellent](https://github.com/madrilene/eleventy-excellent)
- [AleksandrHovhannisyan/11ty-sass-images-seo](https://github.com/AleksandrHovhannisyan/11ty-sass-images-seo)
- [mesinkasir/eleventyblog](https://github.com/mesinkasir/eleventyblog)

### Helpful Links

- [Shopify CheatSheet](https://www.shopify.com/partners/shopify-cheat-sheet)
- [Critical CSS Generator](https://www.corewebvitals.io/tools/critical-css-generator)
- [HTML Recipes](https://htmlrecipes.dev)
- [Vanilla JS components](https://vanillalist.top)
- [Markdown-IT Sandbox](https://markdown-it.github.io)
