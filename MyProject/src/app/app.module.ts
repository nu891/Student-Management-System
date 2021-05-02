import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediumEditorModule} from 'angular6-medium-editor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PopupComponent } from './components/popup/popup.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './components/filter/filter.component';
import { OrderByPipe } from './shared/orderBy.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { FiledragndropComponent } from './components/filedragndrop/filedragndrop.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { LoginComponent } from './components/login/login.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
//import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { AdminComponent } from './components/admin/admin.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorsComponent } from './components/authors/authors.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SampleComponent } from './components/sample/sample.component';
import { BooksComponent } from './components/books/books.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { SidebarModule } from 'ng-sidebar';


// import { Routes, RouterModule } from '@angular/router'; // CLI imports router
// const routes: Routes = [];





@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PopupComponent,
    FilterComponent,
    OrderByPipe,
    FilterPipe,
    FiledragndropComponent,
    LoginComponent,
    ExperimentComponent,
    RegisteruserComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    AuthorsComponent,
    HomepageComponent,
    SampleComponent,
    BooksComponent,
    CardComponent,
    HomeComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    MediumEditorModule,
    SidebarModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxFileDropModule,
    ShowHidePasswordModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      //outerStrokeWidth: 16,
      //innerStrokeWidth: 8,
      //outerStrokeColor: "#78C000",
      //innerStrokeColor: "#C7E596",
      //animationDuration: 300
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
