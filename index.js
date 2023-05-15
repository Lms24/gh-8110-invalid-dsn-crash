// Import stylesheets
import './style.css';

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://localhost:4000',
  debug: true,
});

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
