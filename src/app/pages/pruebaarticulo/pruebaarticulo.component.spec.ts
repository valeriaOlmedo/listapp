import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaarticuloComponent } from './pruebaarticulo.component';

describe('PruebaarticuloComponent', () => {
  let component: PruebaarticuloComponent;
  let fixture: ComponentFixture<PruebaarticuloComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaarticuloComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
