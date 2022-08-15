import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
// import { FormControl, Validators} from '@angular/forms';



import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { LoginComponent } from './components/login/login.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerReadComponent } from './components/customer/customer-read/customer-read.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CustomerCreateComponent,
    CustomerReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // FormControl,
    // Validators,
    MatSidenavModule,  	 
    MatListModule,		
    MatCardModule,		
    MatButtonModule, 	
    MatSnackBarModule,	
    MatToolbarModule,	
    MatFormFieldModule,	
    MatInputModule,		
    MatTableModule, 	
    MatPaginatorModule, 
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
