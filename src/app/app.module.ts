import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PortadaService } from './services/portada.service';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PortadaActualComponent } from './components/portada-actual/portada-actual.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PortadaActualComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, PortadaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
