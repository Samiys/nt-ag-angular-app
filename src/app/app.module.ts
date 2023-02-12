import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './home/main-view/main-view.component';
import { DetailViewComponent } from './home/detail-view/detail-view.component';
import { SideBySideComponent } from './home/side-by-side/side-by-side.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    DetailViewComponent,
    SideBySideComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
