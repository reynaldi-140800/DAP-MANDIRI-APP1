import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { RouteGuard } from "./shared/guard/route.guard";


const routes: Routes = [
    // lazy load
    {
      path: 'demo',
      canActivate:[RouteGuard],
      canActivateChild:[RouteGuard],
      loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
    },
    {
      path: '',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: '',
      redirectTo: '/demo',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: NotFoundComponent
    }
  ];
  

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }