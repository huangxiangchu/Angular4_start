import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import {MapComponent}  from './map.component' 

const  routes:Routes=[

    {
        path:"",
        data:{
            title:"Map"
        } ,children:[{
            path:'map',
            component:MapComponent,
            data:{
                title:'Map'
            }
        }]
    }

];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class MapRoutingModule { }