import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        canActivate: [AdminGuard]
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
