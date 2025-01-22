import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCellTemplateComponent } from './date-cell-template.component';

describe('DateCellTemplateComponent', () => {
  let component: DateCellTemplateComponent;
  let fixture: ComponentFixture<DateCellTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateCellTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateCellTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
