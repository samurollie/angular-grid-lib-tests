import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColumnRegular, RevoGrid, Template } from '@revolist/angular-datagrid';
import { flavours, rowFormat } from '../../interfaces/rowFormat';
@Component({
  selector: 'app-revo',
  standalone: true,
  imports: [RevoGrid, MatSlideToggleModule, NgIf],
  templateUrl: './revo.component.html',
  styleUrl: './revo.component.scss',
})
export class RevoComponent {
  @ViewChild('grid') grid!: RevoGrid;
  public defMode: boolean = false;

  public source: rowFormat[] = [
    {
      name: 'John Doe',
      age: 23,
      birthDate: new Date('1998-01-01'),
      isFromAlagoas: true,
      iceCreamFlavours: flavours.vanilla,
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      windows: true,
      mac: false,
      linux: true,
    },
    {
      name: 'Jane Doe',
      age: 25,
      birthDate: new Date('1996-01-01'),
      isFromAlagoas: false,
      iceCreamFlavours: flavours.chocolate,
      email: 'jane.doe@example.com',
      phoneNumber: '098-765-4321',
      windows: false,
      mac: true,
      linux: false,
    },
    {
      name: 'Alice',
      age: 21,
      birthDate: new Date('2000-01-01'),
      isFromAlagoas: true,
      iceCreamFlavours: flavours.strawberry,
      email: 'alice@example.com',
      phoneNumber: '111-222-3333',
      windows: true,
      mac: true,
      linux: false,
    },
    {
      name: 'Bob',
      age: 22,
      birthDate: new Date('1999-01-01'),
      isFromAlagoas: false,
      iceCreamFlavours: flavours.vanilla,
      email: 'bob@example.com',
      phoneNumber: '444-555-6666',
      windows: false,
      mac: false,
      linux: true,
    },
    {
      name: 'Charlie',
      age: 24,
      birthDate: new Date('1997-01-01'),
      isFromAlagoas: true,
      iceCreamFlavours: flavours.chocolate,
      email: 'charlie@example.com',
      phoneNumber: '777-888-9999',
      windows: true,
      mac: false,
      linux: true,
    },
  ];

  public columns: ColumnRegular[] = [
    { prop: 'name', name: 'Nome' },
    { prop: 'age', name: 'Idade' },
    { prop: 'birthDate', name: 'Data de nascimento', columnType: 'date' },
    { prop: 'isFromAlagoas', name: 'É de Alagoas?' },
    { prop: 'iceCreamFlavours', name: 'Sabor favorito de sorvete' },
    { prop: 'email', name: 'Email' },
    { prop: 'phoneNumber', name: 'Telefone' },
  ];

  public changeMode() {
    this.defMode = !this.defMode;
  }
}
