import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import {ButtonsComponent}  from './buttons.component' 

const routes: Routes = [
  
  {
    path:'',
    data:{
      title:'components'
    },children:[
      {
        path:'buttons',
        component:ButtonsComponent,
        data:{
          title:'buttons'
        }

      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
