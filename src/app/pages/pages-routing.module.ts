import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { TodoComponent } from "./todo/todo.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'courses',
        loadChildren: () => import ('./courses/courses.module').then (m =>m.CoursesModule)
    },
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: "",
        redirectTo: 'home',
        pathMatch: "full"
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}