import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgComponent } from './ag.component';

describe('AgComponent', () => {
  let component: AgComponent;
  let fixture: ComponentFixture<AgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
