import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { SearchArtistsPipe } from './search-artists.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { WordMatchComponent } from './word-match/word-match.component';
import { HomeComponent } from './home-page/home.component';
import { DirectoryComponent} from './directory/directory.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'directory',
    component: DirectoryComponent
  },
  {
    path: 'word',
    component: WordMatchComponent
  }
  //{
  //  path: 'directory',
   // component:
 // }
]

@NgModule({
  declarations: [
    AppComponent,
    ArtistItemsComponent,
    SearchArtistsPipe,
    ArtistDetailsComponent,
    WordMatchComponent,
    HomeComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
