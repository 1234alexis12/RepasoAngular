import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mt-5">
      <div class="jumbotron bg-primary text-white p-5 rounded">
        <h1 class="display-4">¡Estamos en el Inicio!</h1>
        <p class="lead">Sistema de Gestión de Empleados y Salarios</p>
        <hr class="my-4">
        <p>Administra empleados, calcula salarios y mantén contacto con nosotros.</p>
      </div>
      
      <div class="row mt-5">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">Empleados</h5>
              <p class="card-text">Registra y gestiona información de empleados</p>
              <a routerLink="/empleado" class="btn btn-primary">Ir a Empleados</a>
            </div>
          </div>
        </div>
        
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">Salarios</h5>
              <p class="card-text">Calcula salarios con bonificaciones y descuentos</p>
              <a routerLink="/salario" class="btn btn-success">Calcular Salario</a>
            </div>
          </div>
        </div>
        
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">Contacto</h5>
              <p class="card-text">Envíanos tus consultas y comentarios</p>
              <a routerLink="/contacto" class="btn btn-info">Contactar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .jumbotron {
      background: linear-gradient(135deg, #007bff, #0056b3);
    }
    .card {
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
  `]
})
export class InicioComponent { }