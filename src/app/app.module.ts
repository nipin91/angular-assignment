import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDisplayComponent } from './component/main-display/main-display.component';
import { PaginationComponent } from './component/main-display/pagination/pagination.component';
import { SidemenuComponent } from './component/sidemenu/sidemenu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsTableComponent } from './component/main-display/details-table/details-table.component';
import { MaterialExampleModule } from './angular.material';
@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    MainDisplayComponent,
    PaginationComponent,
    DetailsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
