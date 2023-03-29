import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoticeOfPrivacyPageModule } from './pages/notice-of-privacy/notice-of-privacy.module';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },

  // MOBILE PAGES INIT 
  {
    path: 'start/:id',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'personal-data',
    loadChildren: ()=>import('./pages/form-validation-pages/personal-data/personal-data.module').then(m => m.PersonalDataPageModule)
  },
  {
    path: 'address-data',
    loadChildren: () => import('./pages/form-validation-pages/address-data/address-data.module').then( m => m.AddressDataPageModule)
  },
  {
    path: 'finance-data',
    loadChildren: () => import('./pages/form-validation-pages/finance-data/finance-data.module').then( m => m.FinanceDataPageModule)
  },
  {
    path: 'documents-data',
    loadChildren: () => import('./pages/form-validation-pages/documents-data/documents-data.module').then( m => m.DocumentsDataPageModule)
  },
  {
    path: 'confirm-data',
    loadChildren: () => import('./pages/form-validation-pages/confirm-data/confirm-data.module').then( m => m.ConfirmDataPageModule)
  },
  {
    path: 'detalles-carrusel',
    loadChildren: () => import('./pages/detalles-carrusel/detalles-carrusel.module').then( m => m.DetallesCarruselPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'notice-of-privacy',
    loadChildren: () => import('./pages/notice-of-privacy/notice-of-privacy.module').then( m => m.NoticeOfPrivacyPageModule)
  },
  {
    path: 'legal-warning',
    loadChildren: () => import('./pages/legal-warning/legal-warning.module').then( m => m.LegalWarningPageModule)
  },
  {
    path: 'formularios-web',
    loadChildren: () => import('./pages/formularios-web/formularios-web.module').then( m => m.FormulariosWebPageModule)
  },
  {
    path: 'start-web',
    loadChildren: () => import('./pages/start-web/start-web.module').then( m => m.StartWebPageModule)
  }


  // MOBILE PAGES END 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
