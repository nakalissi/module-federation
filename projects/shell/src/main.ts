import { loadManifest } from '@angular-architects/module-federation';

window['IS_SHELL'] = true;

loadManifest("/assets/mf.manifest.json")
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
