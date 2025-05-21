import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPswdComponent } from './rec-pswd.component';

describe('RecPswdComponent', () => {
  let component: RecPswdComponent;
  let fixture: ComponentFixture<RecPswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecPswdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecPswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
