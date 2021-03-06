import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Modulos do sistema
import { WelcomePage } from '../pages/welcome/welcome';
import { CentroFashionPage } from '../pages/centro-fashion/centro-fashion';
import { CustomHeaderComponent } from '../components/custom-header/custom-header';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { Dialogs } from '@ionic-native/dialogs'
import {Menu} from './menu';
import { CreateProfilePage } from '../pages/create-profile/create-profile';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //Modulos do sistema
    WelcomePage,
    CentroFashionPage,
    LoginPage,
    CustomHeaderComponent,
    SignupPage,
    Menu,
    CreateProfilePage
    //BrMaskerModule
    //Dialogs

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    HttpModule,
    //Dialogs
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    //Modulos do sistema
    WelcomePage,
    CentroFashionPage,
    LoginPage,
    CustomHeaderComponent,
    SignupPage,
    Menu,
    CreateProfilePage
    //Dialogs
    //BrMaskerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    MyApp
    
  ]
})
export class AppModule { }
