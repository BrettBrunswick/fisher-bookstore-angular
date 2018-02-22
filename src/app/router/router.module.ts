import { NgModule } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../orders/orders.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'orders', component: OrdersComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule { }
