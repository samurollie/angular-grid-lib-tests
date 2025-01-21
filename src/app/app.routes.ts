import { Routes } from '@angular/router';
import { RevoComponent } from './pages/revo/revo.component';
import { AgComponent } from './pages/ag/ag.component';
import { HomeComponent } from './pages/home/home.component';
import { ColumnsComponent } from './pages/ag/columns/columns.component';
import { RevoDefComponent } from './pages/revo-def/revo-def.component';

export const routes: Routes = [
  {
    path: 'revo',
    component: RevoComponent,
  },
  { path: 'ag', component: AgComponent },
  { path: 'revodef', component: RevoDefComponent },
  { path: '', component: HomeComponent },
];
