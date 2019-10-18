import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowDetailsComponent } from './show-details/show-details.component';


const routes: Routes = [
  { path: '', component : DisplayComponent},
  { path: 'new', component: CreateComponent },
  { path: 'show/:id', component: ShowDetailsComponent },
  { path: 'showAll', component: DisplayComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: '', pathMatch: 'full', redirectTo:'/'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
