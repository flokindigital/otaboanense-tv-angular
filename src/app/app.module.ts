import { VideosComponent } from './painel/videos/videos.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

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
import { P404Component } from './p404/p404.component';
import { DestaqueComponent } from './painel/destaque/destaque.component';
import { NewsComponent } from './news/news.component';
import { AdsenseModule } from 'ng2-adsense';
import { LoginComponent } from './painel/login/login.component';

import { HomeService } from './services/home.service';
import { UserService } from './services/user.service';
import { EditarComponent } from './painel/video/editar/editar.component';
import { LogoutComponent } from './painel/logout/logout.component';
import { TestComponent } from './test/test.component';
import { SingleComponent } from './page/single/single.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';

const appRoutes: Routes = [
  { path: 'painel/banner', component: BannerComponent },
  { path: 'painel/login', component: LoginComponent },
  { path: 'painel/videos', component: VideosComponent },
  { path: 'painel/video/editar', component: EditarComponent },
  { path: 'painel/video/novo', component: EditarComponent },
  { path: 'painel/sair', component: LogoutComponent },
  { path: 'testandotudo/ola', component: TestComponent },
  { path: 'video/:id', component: FrontendComponent },
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
    NewsComponent,
    LoginComponent,
    VideosComponent,
    EditarComponent,
    LogoutComponent,
    TestComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5073402446734231',
      adSlot: 8385261178
    }),
    CommonModule,
    TransferHttpCacheModule,
    NgtUniversalModule
  ],
  providers: [UserService, HomeService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
