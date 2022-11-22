import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChildAaComponent } from "./component-a/child-aa/child-aa.component";
import { ChildAbComponent } from "./component-a/child-ab/child-ab.component";
import { ComponentAComponent } from "./component-a/component-a.component";
import { ComponentBComponent } from "./component-b/component-b.component";
import { ParentComponent } from "./parent/parent.component";

const routes: Routes = [
    {
        path: "parent",
        component: ParentComponent
    },
    {
        path: 'component-a',
        component: ComponentAComponent,
        children:[
            {
                path: 'child-aa',
                component: ChildAaComponent,
            },
            {
                path: 'child-ab',
                component: ChildAbComponent
            }
        ]
    },
    {
        path: 'component-b/:id',
        component: ComponentBComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DemoRoutingModule {}