import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthLibComponent } from 'auth-lib';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: AuthLibComponent,
  },
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'checkout',
        exposedModule: './Module',
      }).then((m) => m.CheckoutModule),
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
