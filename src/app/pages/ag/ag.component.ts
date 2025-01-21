import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type {
  ColDef,
  ColGroupDef,
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from 'ag-grid-community'; // Column Definition Type Interface
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { flavours, rowFormat } from '../../interfaces/rowFormat';
import { NgIf } from '@angular/common';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-ag',
  standalone: true,
  imports: [AgGridAngular, MatSlideToggleModule, NgIf],
  templateUrl: './ag.component.html',
  styleUrl: './ag.component.scss',
})
export class AgComponent {
  @ViewChild('gridApi') grid!: AgGridAngular;
  public defMode: boolean = false;
  public autoSizeStrategy:
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy = {
    type: 'fitCellContents',
  };
  public rowData: rowFormat[] = [
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

  // Column Definitions: Defines the columns to be displayed.
  public colDefs: (ColDef<rowFormat> | ColGroupDef<rowFormat>)[] = [
    {
      headerName: '',
      valueGetter: 'node.rowIndex + 1',
      pinned: 'left',
      resizable: false,
      editable: false,
    },

    {
      field: 'name',
      headerName: 'Nome',
      pinned: 'left',
      rowDrag: () => !this.defMode,
    },
    { field: 'age' },
    {
      field: 'birthDate',
      valueFormatter: (params) => params.value?.toLocaleDateString(),
    },
    { field: 'isFromAlagoas', headerName: 'É de Alagoas?' },
    {
      field: 'iceCreamFlavours',
      headerName: 'Sabor favorito de sorvete',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: { values: Object.values(flavours) },
    },
    { field: 'email', headerName: 'Email' },
    {
      headerName: 'Sistemas Operacionais',
      children: [
        { field: 'windows', headerName: 'Windows' },
        { field: 'mac', headerName: 'Mac' },
        { field: 'linux', headerName: 'Linux' },
      ],
    },
  ];

  public defaultColDef: ColDef = {
    editable: true,
    lockPosition: 'left',
  };

  public changeMode() {
    this.defMode = !this.defMode;
    if (this.defMode) {
      // Modo de edição das colunas
      const newDef: ColDef = {
        ...this.grid.defaultColDef,
        editable: false,
        lockPosition: undefined,
      };

      this.grid.api?.setGridOption('defaultColDef', newDef);
    } else {
      // Modo de edição das linhas
      const newDef: ColDef = {
        ...this.grid.defaultColDef,
        editable: true,
        lockPosition: 'left',
      };
      this.grid.api?.setGridOption('defaultColDef', newDef);
    }
  }

  public addColumn() {
    const newColumn: ColDef<rowFormat> = {
      field: 'phoneNumber',
      headerName: 'Telefone',
    };
    this.colDefs.splice(2, 0, newColumn);
    this.grid.api?.setGridOption('columnDefs', this.colDefs);
  }
  public removeColumn() {
    this.colDefs.splice(2, 1);
    this.grid.api?.setGridOption('columnDefs', this.colDefs);
  }

  public addRow() {
    this.rowData.push({
      name: '',
      age: 0,
      birthDate: new Date(),
      isFromAlagoas: false,
      iceCreamFlavours: flavours.vanilla,
      email: '',
      phoneNumber: '',
      windows: false,
      mac: false,
      linux: false,
    });
    this.grid.api?.setGridOption('rowData', this.rowData);
  }

  public removeLastRow() {
    this.rowData.pop();
    this.grid.api?.setGridOption('rowData', this.rowData);
  }
}
