import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

// Firebase Configuration
import {environment} from '../environments/environment';

// Components
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/products/product/product.component';
import {ProductListComponent} from './components/products/product-list/product-list.component';

// Services
import {ProductService} from './services/product.service';
import {LoginComponent} from './components/login/login.component';
import {NotificationService} from './services/notification.service';
import {AngularFireAuth} from '@angular/fire/auth';

// Material Modules
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [
    ProductService,
    NotificationService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
