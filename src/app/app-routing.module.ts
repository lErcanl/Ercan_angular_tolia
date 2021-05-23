import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
    {path:'campaignsList',component:CampaignsListComponent},
  {path:'createCampaign',component:CreateCampaignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,CampaignsListComponent,CreateCampaignComponent]
