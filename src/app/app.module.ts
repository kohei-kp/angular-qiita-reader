import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { QiitaReaderComponent } from './qiita-reader/qiita-reader.component';
import { PostContentComponent } from './post-content/post-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    QiitaReaderComponent,
    PostContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
