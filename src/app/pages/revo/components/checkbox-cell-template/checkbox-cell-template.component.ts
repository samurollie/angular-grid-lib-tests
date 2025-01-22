import { Component, Input } from '@angular/core';
import { ColumnDataSchemaModel } from '@revolist/angular-datagrid';

@Component({
  selector: 'app-checkbox-cell-template',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-cell-template.component.html',
  styleUrl: './checkbox-cell-template.component.scss',
})
export class CheckboxCellTemplateComponent {
  @Input() props!: ColumnDataSchemaModel;

  get value() {
    return this.props.value
  }
}
