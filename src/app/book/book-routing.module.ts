import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { LoginGuardService } from '../login-guard.service'
const bookRoutes: Routes = [
    {
        path: '',
        component: BookComponent,
        canActivate: [LoginGuardService]
    }
];
@NgModule({
    imports: [RouterModule.forChild(bookRoutes)],
    exports: [RouterModule]
})
export class BookRoutingModule { }
