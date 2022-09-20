import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckHome } from './providers/check-home.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canLoad: [CheckHome]
  },
  {
    path: 'recensioni',
    loadChildren: () => import('./pages/recensioni/recensioni.module').then(m => m.RecensioniModule)
  },
  {
      path: 'evento/:id',
      loadChildren: () => import('./pages/event-detail/event-detail.module').then(m => m.EventDetailModule)
  },
  {
      path: 'ordini/:id',
      loadChildren: () => import('./pages/ordini-detail/ordini-detail.module').then(m => m.OrdiniDetailModule)
  },
  {
      path: 'categorie',
      loadChildren: () => import('./pages/categorie/categorie.module').then(m => m.CategorieModule)
  },
  {
      path: 'ordini',
      loadChildren: () => import('./pages/ordini/ordini.module').then(m => m.OrdiniModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
  },
    {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },
    {
    path: 'profilo',
    loadChildren: () => import('./pages/profilo/profilo.module').then(m => m.ProfiloModule)
  }


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
