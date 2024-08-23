import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ItemEstoqueQuantidadeFormComponent } from './item-estoque-quantidade-form.component';

describe('ItemEstoqueQuantidadeFormComponent', () => {
  let component: ItemEstoqueQuantidadeFormComponent;
  let fixture: ComponentFixture<ItemEstoqueQuantidadeFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEstoqueQuantidadeFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemEstoqueQuantidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
