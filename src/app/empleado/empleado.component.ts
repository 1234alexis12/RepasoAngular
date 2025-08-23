
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { DesarrolladorMayusculaPipe } from './../desarrollador-mayuscula.pipe';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesarrolladorMayusculaPipe
  ],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  empleadoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore
  ) {
    this.empleadoForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      direccion: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.empleadoForm.valid) {
      try {
        const docRef = await addDoc(collection(this.firestore, 'empleados'), this.empleadoForm.value);
        alert("Empleado registrado correctamente con ID: " + docRef.id);
        this.empleadoForm.reset();
      } catch (e) {
        console.error("Error al registrar empleado: ", e);
        alert("Error al registrar el empleado. Intenta nuevamente.");
      }
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  }
}