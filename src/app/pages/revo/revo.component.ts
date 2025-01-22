import { NgIf } from '@angular/common';
import { afterRender, Component, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  ColumnGrouping,
  ColumnRegular,
  RevoGrid,
  Template,
} from '@revolist/angular-datagrid';
import { flavours, rowFormat } from '../../interfaces/rowFormat';
import { DateCellTemplateComponent } from './components/date-cell-template/date-cell-template.component';

import Plugin from '@revolist/revogrid-column-date';
import SelectTypePlugin from '@revolist/revogrid-column-select';
import NumberColumnType from '@revolist/revogrid-column-numeral';
import { CheckboxCellTemplateComponent } from './components/checkbox-cell-template/checkbox-cell-template.component';

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

  private flavourDropdown = {
    labelKey: 'label',
    valueKey: 'value',
    source: [
      { label: 'Baunilha', value: flavours.vanilla },
      { label: 'Chocolate', value: flavours.chocolate },
      { label: 'Morango', value: flavours.strawberry },
    ],
  };

  public columns: (ColumnGrouping | ColumnRegular)[] = [
    {
      prop: 'name',
      name: 'Nome',
      pin: 'colPinStart',
      rowDrag: () => !this.defMode,
      autoSize: true,
    },
    { prop: 'age', name: 'Idade', columnType: 'int', autoSize: true },
    {
      prop: 'birthDate',
      name: 'Data de nascimento',
      cellTemplate: Template(DateCellTemplateComponent),
      columnType: 'date',
      autoSize: true,
    },
    {
      prop: 'isFromAlagoas',
      name: 'É de Alagoas?',
      cellTemplate: Template(CheckboxCellTemplateComponent),
      autoSize: true,
    },
    {
      ...this.flavourDropdown,
      prop: 'iceCreamFlavours',
      name: 'Sabor favorito de sorvete',
      columnType: 'select',
      autoSize: true,
    },
    { prop: 'email', name: 'Email', autoSize: true },

    {
      name: 'Sistemas operacionais',
      children: [
        {
          prop: 'windows',
          name: 'Windows',
          cellTemplate: Template(CheckboxCellTemplateComponent),
          autoSize: true,
        },
        {
          prop: 'mac',
          name: 'Mac',
          cellTemplate: Template(CheckboxCellTemplateComponent),
          autoSize: true,
        },
        {
          prop: 'linux',
          name: 'Linux',
          cellTemplate: Template(CheckboxCellTemplateComponent),
          autoSize: true,
        },
      ],
    },
  ];

  public columnTypes = {
    select: new SelectTypePlugin(),
    date: new Plugin(),
    int: new NumberColumnType('0'),
    float: new NumberColumnType('0,0'),
  };

  constructor() {
    afterRender(() => {
      this.grid.canMoveColumns = true;
      this.grid.autoSizeColumn = true;
      this.grid.stretch = true;
      this.grid.resize = true;
      this.grid.theme = 'material';
      this.grid.range = true;
    });
  }

  public changeMode() {
    this.defMode = !this.defMode;
    if (this.defMode) {
      // Modo de edição das colunas
      this.grid.canMoveColumns = true;
      this.grid.resize = true;
    } else {
      // Modo de edição das linhas
      this.grid.canMoveColumns = false;
      this.grid.resize = false;
    }
  }

  public addColumn() {}

  public removeColumn() {
    const newColumn = { prop: 'phoneNumber', name: 'Telefone', autoSize: true };
    this.columns.splice(2, 0, newColumn);
    this.grid.columns = this.columns
  }

  public addRow() {
    this.source.push({
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
    // this.grid.row;
  }

  public removeLastRow() {
    this.source.pop();
    this.grid.source = this.source;
  }
}
