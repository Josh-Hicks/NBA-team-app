import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TeamComponent } from './team/team.component'

const routes: Routes = [
  {path: '', component: TeamComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
