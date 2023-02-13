import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './home/main-view/main-view.component';
import { DetailViewComponent } from './home/detail-view/detail-view.component';
import { SideBySideComponent } from './home/side-by-side/side-by-side.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberSuffixesPipe } from './shared/numbers-pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    DetailViewComponent,
    SideBySideComponent,
    NavigationComponent,
    NumberSuffixesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
