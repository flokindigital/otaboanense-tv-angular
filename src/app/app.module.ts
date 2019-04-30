import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { PlayerComponent } from './player/player.component';
import { AdComponent } from './ad/ad.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

import { BannerComponent } from './painel/banner/banner.component';
import { FrontendComponent } from './frontend/frontend.component';
import { HomeService } from './services/home.service';
import { P404Component } from './p404/p404.component';
import { DestaqueComponent } from './painel/destaque/destaque.component';
import { NewsComponent } from './news/news.component';
import { AdsenseModule } from 'ng2-adsense';

const appRoutes: Routes = [
  { path: 'painel/banner', component: BannerComponent },
  { path: '', component: FrontendComponent },
  { path: '**', component: P404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerComponent,
    AdComponent,
    ListMoviesComponent,
    FooterComponent,
    BannerComponent,
    FrontendComponent,
    P404Component,
    DestaqueComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    FormsModule,
    HttpClientModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5073402446734231',
      adSlot: 8385261178,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
