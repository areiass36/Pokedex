import { StatsComponent } from './../../components/stats/stats.component';
import { ImgProfileComponent } from './../../components/img-profile/img-profile.component';
import { TypeComponent } from './../../components/type/type.component';
import { EntrySlideComponent } from './../../components/entry-slide/entry-slide.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule
  ],
  declarations: [
    DetailsPage,
    EntrySlideComponent,
    TypeComponent,
    ImgProfileComponent,
    StatsComponent]
})
export class DetailsPageModule {}
