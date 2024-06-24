import { Routes } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceComponent } from './single-face/single-face.component';

export const routes: Routes = [
    {path: 'facesnaps/:id', component: SingleFaceComponent },
    {path: 'facesnaps', component: TestListComponent},
    {path: '', component: LandingPageComponent}
];
