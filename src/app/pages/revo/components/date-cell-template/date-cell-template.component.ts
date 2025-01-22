import { Component, Input } from '@angular/core';
import { ColumnDataSchemaModel } from '@revolist/angular-datagrid';

@Component({
  selector: 'app-date-cell-template',
  standalone: true,
  imports: [],
  templateUrl: './date-cell-template.component.html',
  styleUrl: './date-cell-template.component.scss',
})
export class DateCellTemplateComponent {
  @Input() props!: ColumnDataSchemaModel;

  get value() {
    return this.props.value.toLocaleDateString();
  }
}
