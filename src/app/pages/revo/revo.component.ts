import { Component } from '@angular/core';
import { RevoGrid, Template } from "@revolist/angular-datagrid";
@Component({
  selector: 'app-revo',
  standalone: true,
  imports: [RevoGrid],
  templateUrl: './revo.component.html',
  styleUrl: './revo.component.scss',
})
export class RevoComponent {
  public source = [
    {
      name: '1',
      details: 'Item 1',
    },
    {
      name: '2',
      details: 'Item 2',
    },
  ];
  public columns = [
    {
      prop: 'name',
      name: 'First',
    },
    {
      prop: 'details',
      name: 'Second',
    },
  ];
}
