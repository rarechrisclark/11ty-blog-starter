# blog-11ty-bootstrap

This was going to be my personal website, but I've decided to take the route of `Vitepress` as my framework for my blog.

I was going to keep it as a private repository, but I decided to make it public so that others can learn from it. Open source is awesome!

## Technologies Used

- [11ty/eleventy](https://github.com/11ty/eleventy) is used for the static building (v3.0)
- [twbs/bootstrap](https://github.com/twbs/bootstrap) is used for styling (v5.3)
- [Shopify/liquid](https://github.com/Shopify/liquid) is used as the templating engine

## Features

The assets are built in **under 10 seconds**... nice.

- Light/Dark/System theme switcher - courtesy of [Building a Theme Switcher for Bootstrap 5.3+ | Alberto Roura](https://albertoroura.com/building-a-theme-switcher-for-bootstrap/)
- Vanilla JS (minimal use)
- Image processing and rendering with `srcset` for ZIPPY loading
- Markdown IT processing of `.md` files
- Pagination
- Breadcrumbs
- Local Search - indexed by [micpst/minisearch](https://github.com/micpst/minisearch)

## Local Development

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the local development server
4. The server will be running at http://localhost:8080

> Note:
> - The 11ty configuration is located in the `./config` directory for better organisation
> - The site metadata can be modified in the `./src/_data/meta.js`
> - The final built assets will be stored in `./_site`

## Deployment

This project has been set up to be built and hosted as a static site. It would be recommended to host on a service such as Cloudfare Pages, GitHub Pages, or in an AWS bucket.

1. When you are ready to deploy, simply run `npm run build` to package up the static assets, and you're good to go!

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
