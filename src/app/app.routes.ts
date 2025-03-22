import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';

export const routes: Routes = [
    { path: '',title:"home Page", component: HomepageComponent},
    { path:'aboutus',title:"about page", component:AboutuspageComponent},
];
