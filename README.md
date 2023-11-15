<h1 align='center'>Tembo Website</h1>
<h4 align='center'>Goodbye Database Sprawl, Hello Postgres</h4>
<div align='center'>
<a href='https:tembo.io' target='_blank'>tembo.io</a>
</div>

<br />

The Tembo website is built using [Astro](https://astro.build) and [Docusaurus 2](https://docusaurus.io/), both are modern static website and docs generators.

### Installation

> Run this from the root of repo:

```
$ npm install
```

### Local Development

> Landing page:

```
$ npm run landing
```

> Docs:

```
$ npm run docs
```

These command(s) start local development servers and open up browsers. All changes are reflected live without having to restart the server.

### Build

> Landing:

```
$ npm run build-landing
```

> Docs:

```
$ npm run build-docs
```

This commands will generate static content into the associated `build` directory and can be served using any static contents hosting service.

### Deployment

- `main` is auto-deployed to https://tembo.io
- Open PRs (draft or regular) have preview environments deployed, comment including link will be posted in the PR

### Recommended Workflow

- Check out new branch
- npm run start
  - commits locally... looking at site in browser
  - push to remote each commit (opened draft PR)
- Ready to go?
  - Review preview environment
  - Squash and merge without review needed
