import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { PlayerComponent } from './tabs/player/players.component';
import { PlayerDetailComponent } from './tabs/player/player-detail.component';
import { TeamsComponent } from './tabs/team/teams.component';
import { TeamDetailComponent } from './tabs/team/team-detail.component';
import {TabsComponent} from "~/tabs/tabs.component";
import {LoginComponent} from "~/login/login.component";

export const COMPONENTS = [LoginComponent, TabsComponent, PlayerComponent, PlayerDetailComponent, TeamsComponent, TeamDetailComponent];

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "tabs-main", redirectTo: "/tabs/(playerTab:players//teamTab:teams)" },

    { path: "login", component: LoginComponent },

    { path: "tabs", component: TabsComponent, children: [
      { path: 'players', component: PlayerComponent, outlet: 'playerTab'  },
      { path: 'player/:id', component: PlayerDetailComponent, outlet: 'playerTab'  },

      { path: 'teams', component: TeamsComponent, outlet: 'teamTab' },
      { path: 'team/:id', component: TeamDetailComponent, outlet: 'teamTab' },
    ]
    }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
