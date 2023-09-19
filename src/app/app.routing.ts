import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { PortadaActualComponent } from "./components/portada-actual/portada-actual.component";
import { PaginaErrorComponent } from "./components/pagina-error/pagina-error.component";

// Configuración del array de las rutas
const appRoutes: Routes = [
    { path: '', component: PortadaActualComponent },
    { path: 'home', component: PortadaActualComponent },
    { path: '**', component: PaginaErrorComponent }
];

// Exportar el módulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);