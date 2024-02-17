import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
    {
        path:'*',
        redirectTo:'registration',
        pathMatch:'full'
    },
    {
        path:'registration',
        component:RegistrationComponent
    }
];
