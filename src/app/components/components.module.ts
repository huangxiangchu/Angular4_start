import { NgModule } from '@angular/core';

import {ComponentsRoutingModule } from './components-routing.module';
import {ButtonsComponent}  from './buttons.component' 

@NgModule({
  imports: [
    ComponentsRoutingModule,   
  ],
  declarations: [    
     ButtonsComponent
   ]
})
export class ComponentsModule { }
