import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { LandingComponent } from './components/landing/landing.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ChallengeItemComponent } from './components/challenge-item/challenge-item.component';
import { RessourciumItemComponent } from './components/ressourcium-item/ressourcium-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MoodFormComponent } from './components/mood-form/mood-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    MenuComponent,
    BlogPostComponent,
    ChallengeItemComponent,
    RessourciumItemComponent,
    MoodFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule, // firestore
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
