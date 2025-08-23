import { Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { SalarioComponent } from './salario/salario.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: InicioComponent},
    { path: 'empleado', component: EmpleadoComponent },
    { path: 'salario', component: SalarioComponent },
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'servicios', component: ServiciosComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: '**', redirectTo: '' }
];
