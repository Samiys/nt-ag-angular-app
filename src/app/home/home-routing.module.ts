import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./main-view/main-view.module').then((m) => m.MainViewModule),
      }
    ],
  },
  {
    path: 'detail-view',
    component: DetailViewComponent
  },
  {
    path: 'side-by-side',
    component: SideBySideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
