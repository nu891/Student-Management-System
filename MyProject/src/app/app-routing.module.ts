import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PopupComponent } from './components/popup/popup.component';
import { OrderByPipe } from './shared/orderBy.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { FiledragndropComponent } from './components/filedragndrop/filedragndrop.component';
import { LoginComponent } from './components/login/login.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { AuthorsComponent} from './components/authors/authors.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CardComponent } from './components/card/card.component';


const routes: Routes = [{path:'profile',component:ProfileComponent},
{path:'home',component:HomepageComponent},
{path:'admin',component:AdminComponent},
{path:'teacher',component:TeacherComponent},
{path:'student',component:StudentComponent},
{path:'registeruser',component:RegisteruserComponent},
{path:'popup',component:PopupComponent},
{path:'authors',component:AuthorsComponent},
{path:'card',component:CardComponent},
{path:'filter',component:FilterComponent},{path:'drag',component:FiledragndropComponent},
{path:'',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
