# Astro CV.
## Description
A CV generator built using astro. Generates a static site which can contain multiple CV's 
and hosted on your hosting provider of choice (i use cloudflare linked to a private repo)

You can see a demo here https://astro-cv.pages.dev/cv/demo/

## Getting started
run `npm run dev` to start the development server.

### Adding a new CV 
- Come up with a unique ID for your CV. You can use something human readable like 'bobjonescv', or something
more like 'c37ab0316682496ba0ec8fdfa4edc0a6' if you want to keep it private
- create and export your cv data from a file at path `src/data/<ID>.ts`
- Add your cv data file to the list of exports by adding it to the file `src/data/index.ts`
- Generate / update pdf version of your cv by running `npm run print`

Once you have created your cv you can view the web version at
`/cv/<id>`.

The print version can be also viewed at `/cv/<id>/print`

When you make any changes you make to your CV, dont forget to run `npm run print` to regenerate the downloadable PDF version of your CV

## Limitations
The print version currently leaves pagination up to the user where you can set a page break before / after / none for each experience section