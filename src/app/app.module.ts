import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './slides/slides.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { SectionComponent } from './section/section.component';
import { TrendingnowComponent } from './trendingnow/trendingnow.component';
import { BestdealsComponent } from './bestdeals/bestdeals.component';
import { TrendsComponent } from './trends/trends.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LipscomponentComponent } from './lipscomponent/lipscomponent.component';
import { EyescomponentComponent } from './eyescomponent/eyescomponent.component';
import { NailscomponentComponent } from './nailscomponent/nailscomponent.component';
import { FacecomponentComponent } from './facecomponent/facecomponent.component';
import { MoisturiserComponent } from './moisturiser/moisturiser.component';
import { SunscreenComponent } from './sunscreen/sunscreen.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    FooterComponent,
    ContainerComponent,
    SectionComponent,
    TrendingnowComponent,
    BestdealsComponent,
    TrendsComponent,
    AddtocartComponent,
    LipscomponentComponent,
    EyescomponentComponent,
    NailscomponentComponent,
    FacecomponentComponent,
    MoisturiserComponent,
    SunscreenComponent,
    SerumComponent,
    CleanserComponent,
    LoginComponent,
    LipsPageComponent,
    FacePageComponent,
    EyesPageComponent,
    NailsPageComponent,
    MoisturizerPageComponent,
    SunscreenPageComponent,
    SerumPageComponent,
    CleanserPageComponent,
    CheckOutComponent,
    TrendingPageComponent,
    BestdealsPageComponent,
    EyestrendsComponent,
    ShadowtrendsComponent,
    FoundationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
