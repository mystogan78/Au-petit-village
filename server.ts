import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { renderApplication } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './src/app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './src/app/app.routes';
import { importProvidersFrom } from '@angular/core';

// Fonction de bootstrap pour SSR
function bootstrap() {
  return bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule),
      provideRouter(routes),
      { provide: APP_BASE_HREF, useValue: '/' },
    ],
  });
}

// Express Server
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular rendering engine
  server.get('*', (req, res, next) => {
    bootstrap()
      .then(() => res.sendFile(indexHtml)) // Envoie le fichier HTML rendu
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
