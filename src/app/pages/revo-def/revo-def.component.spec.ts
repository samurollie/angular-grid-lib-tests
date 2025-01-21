import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevoDefComponent } from './revo-def.component';

describe('RevoDefComponent', () => {
  let component: RevoDefComponent;
  let fixture: ComponentFixture<RevoDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevoDefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevoDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
