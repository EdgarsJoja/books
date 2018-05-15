import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { AppShellModule } from './app-shell/app-shell.module';

const routes: Routes = [{path: '', component: AppShellComponent, outlet: 'app-shell'}];

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        RouterModule.forRoot(routes),
        AppShellModule
    ],
    bootstrap: [AppComponent],
    declarations: [AppShellComponent],
})
export class AppServerModule {
}
