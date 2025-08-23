import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MonedaPipe } from './../moneda.pipe';
import { DesarrolladorMayusculaPipe } from './../desarrollador-mayuscula.pipe';

@Component({
  selector: 'app-salario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MonedaPipe,
    DesarrolladorMayusculaPipe
  ],
  templateUrl: './salario.component.html',
  styleUrl: './salario.component.css'
})
export class SalarioComponent {
  salarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore
  ) {
    this.salarioForm = this.fb.group({
      codigoEmpleado: ['', Validators.required],
      nombreEmpleado: ['', Validators.required],
      sueldoBase: [0, [Validators.required, Validators.min(1)]]
    });
  }

  // Cálculos automáticos
  get bonificacion(): number {
    const sueldoBase = this.salarioForm.get('sueldoBase')?.value || 0;
    return sueldoBase * 0.12; // 12% del sueldo base
  }

  get descuentoAFP(): number {
    const sueldoBase = this.salarioForm.get('sueldoBase')?.value || 0;
    return sueldoBase * 0.13; // 13% del sueldo base
  }

  get descuentoSeguro(): number {
    const sueldoBase = this.salarioForm.get('sueldoBase')?.value || 0;
    return sueldoBase * 0.09; // 9% del sueldo base
  }

  get totalDescuentos(): number {
    return this.descuentoAFP + this.descuentoSeguro;
  }

  get sueldoBruto(): number {
    const sueldoBase = this.salarioForm.get('sueldoBase')?.value || 0;
    return sueldoBase + this.bonificacion;
  }

  get totalAPagar(): number {
    return this.sueldoBruto - this.totalDescuentos;
  }

  async onSubmit() {
    if (this.salarioForm.valid) {
      const salarioData = {
        ...this.salarioForm.value,
        bonificacion: this.bonificacion,
        descuentoAFP: this.descuentoAFP,
        descuentoSeguro: this.descuentoSeguro,
        totalDescuentos: this.totalDescuentos,
        sueldoBruto: this.sueldoBruto,
        totalAPagar: this.totalAPagar,
        fechaCalculo: new Date()
      };

      try {
        const docRef = await addDoc(collection(this.firestore, 'salarios'), salarioData);
        alert("Salario calculado y guardado correctamente con ID: " + docRef.id);
        this.salarioForm.reset();
      } catch (e) {
        console.error("Error al guardar el salario: ", e);
        alert("Error al guardar el salario. Intenta nuevamente.");
      }
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  }
}