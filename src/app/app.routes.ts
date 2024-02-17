import {RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

export const routes: Routes = [
    {
        path:'*',
        redirectTo:'registration',
        pathMatch:'full'
    },
    {
        path:'registration',
        component:RegistrationComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'forgotpassword',
        component:ForgotpasswordComponent
    },
];
