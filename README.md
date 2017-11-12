#Beyond Universal Angular code test, by John Byrne

A deployed version can be viewed on Github Pages here: https://git.io/vFr80

The deployed version makes some adjustments to routing, due to gh server configuration. I'm also planning to deploy this to Heroku oonce they have resolved the issues with Angular cli 5 support.

Tech stack includes Angular 5, Angular cli, Webpack, Typescript, Angular Material, NgRx, RxJs.

<img src="https://raw.githubusercontent.com/JohnByrneRepo/universal-angular-5-youtube/master/listing-tablet.png" width="300">

<img src="https://raw.githubusercontent.com/JohnByrneRepo/universal-angular-5-youtube/master/listing-mobile.png" width="300">

<img src="https://raw.githubusercontent.com/JohnByrneRepo/universal-angular-5-youtube/master/details.png" width="300">

Built on the bootstrap code from: https://github.com/angular/universal-starter

This repo demonstrates the use of 2 different forms of Server Side Rendering.

**Prerender(prerender)** 
* Happens at build time
* Renders your application and replaces the dist index.html with a version rendered at the route `/`.

**Server-Side Rendering(ssr)**
* Happens at runtime
* Uses `ngExpressEngine` to render you application on the fly at the requested url.

### Installation
* `npm install` or `yarn`

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`

## Universal "Gotchas"

> When building Universal components in Angular there are a few things to keep in mind.

- For the server bundle you may need to include your 3rd party module into `nodeExternals` whitelist

- **`window`**, **`document`**, **`navigator`**, and other browser types - _do not exist on the server_ - so using them, or any library that uses them (jQuery for example) will not work. You do have some options, if you truly need some of this functionality:
    
- If you need to use them, consider limiting them to only your client and wrapping them situationally. You can use the Object injected using the PLATFORM_ID token to check whether the current platform is browser or server. 
    
```typescript
 import { PLATFORM_ID } from '@angular/core';
 import { isPlatformBrowser, isPlatformServer } from '@angular/common';
 
 constructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }
 
 ngOnInit() {
   if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      ...
   }
   if (isPlatformServer(this.platformId)) {
     // Server only code.
     ...
   }
 }
```
