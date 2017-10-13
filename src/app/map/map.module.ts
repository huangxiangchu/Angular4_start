import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
imports:[
    MapRoutingModule 
],
declarations:[
    MapComponent
]
})

export class  MapModule{}