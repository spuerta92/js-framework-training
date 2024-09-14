import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoverletterComponent } from './coverletter/coverletter.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ApplicationsComponent } from './applications/applications.component';
import { TestingComponent } from './testing/testing.component';
import { ViewsComponent } from './views/views.component';

export const routes: Routes = [  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'views',
    component: ViewsComponent,
    title: 'Views page'
  },
  {
    path: 'coverletter',
    component: CoverletterComponent,
    title: 'Cover Letter page'
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
    title: 'Certifications page'
  },
  {
    path: 'repositories',
    component: RepositoriesComponent,
    title: 'Repositories page'
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
    title: 'Applications page'
  },
  {
    path: 'testing',
    component: TestingComponent,
    title: 'Testing page'
  }
];
