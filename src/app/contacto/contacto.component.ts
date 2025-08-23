import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore
  ) {
    this.contactoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactoForm.valid) {
      try {
        const docRef = await addDoc(collection(this.firestore, 'contactos'), this.contactoForm.value);
        alert("Registro ingresado correctamente con ID: " + docRef.id);
        this.contactoForm.reset();
      } catch (e) {
        console.error("Error al agregar el registro: ", e);
        alert("Error al enviar el formulario. Intenta nuevamente.");
      }
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  }
}