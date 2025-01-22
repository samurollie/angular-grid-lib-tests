import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCellTemplateComponent } from './checkbox-cell-template.component';

describe('CheckboxCellTemplateComponent', () => {
  let component: CheckboxCellTemplateComponent;
  let fixture: ComponentFixture<CheckboxCellTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxCellTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxCellTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
