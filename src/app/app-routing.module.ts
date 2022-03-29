import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidesComponent } from './slides/slides.component';
import { TrendingnowComponent } from './trendingnow/trendingnow.component';
import { SectionComponent } from './section/section.component';
import { BestdealsComponent } from './bestdeals/bestdeals.component';
import { TrendsComponent } from './trends/trends.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LipscomponentComponent } from './lipscomponent/lipscomponent.component';
import { EyescomponentComponent } from './eyescomponent/eyescomponent.component';
import { FacecomponentComponent } from './facecomponent/facecomponent.component';
import { NailscomponentComponent } from './nailscomponent/nailscomponent.component';
import { SunscreenComponent } from './sunscreen/sunscreen.component';
import { MoisturiserComponent } from './moisturiser/moisturiser.component';
import { SerumComponent } from './serum/serum.component';
import { CleanserComponent } from './cleanser/cleanser.component';
import { LoginComponent } from './login/login.component';
import { LipsPageComponent } from './lips-page/lips-page.component';
import { FacePageComponent } from './face-page/face-page.component';
import { EyesPageComponent } from './eyes-page/eyes-page.component';
import { NailsPageComponent } from './nails-page/nails-page.component';
import { MoisturizerPageComponent } from './moisturizer-page/moisturizer-page.component';
import { SunscreenPageComponent } from './sunscreen-page/sunscreen-page.component';
import { SerumPageComponent } from './serum-page/serum-page.component';
import { CleanserPageComponent } from './cleanser-page/cleanser-page.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { BestdealsPageComponent } from './bestdeals-page/bestdeals-page.component';
import { EyestrendsComponent } from './eyestrends/eyestrends.component';
import { ShadowtrendsComponent } from './shadowtrends/shadowtrends.component';
import { FoundationComponent } from './foundation/foundation.component';
const routes: Routes = [
  {
    path:"",
    component:SlidesComponent
  },
  {
    path:'trendingnow',
    component:TrendingnowComponent
  },
  {
    path:'bestdeals',
    component:BestdealsComponent
  },
  {
  path:'trends',
  component:TrendsComponent
  },
  {
      path:'addtocart',
      component:AddtocartComponent
   },
   {
    path:'lips',
    component:LipscomponentComponent
 },
 {
  path:'eyes',
  component:EyescomponentComponent
},
{
  path:'nails',
  component:NailscomponentComponent
},
{
  path:'face',
  component:FacecomponentComponent
},
{
  path:'sunscreen',
  component:SunscreenComponent
},
{
  path:'moisturise',
  component:MoisturiserComponent
},
{
  path:'serum',
  component:SerumComponent
},
{
  path:'cleanser',
  component:CleanserComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'lip/:id',
  component:LipsPageComponent
},
{
  path:'face/:id',
  component:FacePageComponent
},
{
  path:'eye/:id',
  component:EyesPageComponent
},
{
  path:'nail/:id',
  component:NailsPageComponent
},
{
  path:'moisturizer/:id',
  component:MoisturizerPageComponent
},
{
  path:'sunscreen/:id',
  component:SunscreenPageComponent
},
{
  path:'serum/:id',
  component:SerumPageComponent
},
{
  path:'cleanser/:id',
  component:CleanserPageComponent
},
{
  path:'trending/:id',
  component:TrendingPageComponent
},
{
  path:'bestdeals/:id',
  component:BestdealsPageComponent
},
{
  path:'checkout',
  component:CheckOutComponent
},
{
  path:'eyestrends',
  component:EyestrendsComponent
},
{
  path:'shadowtrends',
  component:ShadowtrendsComponent
},
{
  path:'foundation',
  component:FoundationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
