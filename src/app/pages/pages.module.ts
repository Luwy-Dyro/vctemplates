import { NgModule } from '@angular/core';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

//Module
import { SharedModule } from '../shared/shared.module';
//Routes
import { PAGES_ROUTES } from './page.routes';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent

    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent

    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]

})

export class PagesModule {}