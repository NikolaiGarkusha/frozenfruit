import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ProductsComponent } from './public/products/products.component';
import { ContactsComponent } from './public/contacts/contacts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
        state: 'home'
    }
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'about-company',
    component: AboutComponent,
    data: {
      state: 'about'
    }
  },
  {
    path: 'contacts',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }