import { PocUnsubComponent } from './componentes/poc-unsub.component';
import { PocTakeComponent } from './componentes/poc-take.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { PocComponent } from './componentes/poc.component';
import { PocTakeUntilComponent } from './componentes/poc-take-until.component';
import { PocAsyncComponent } from './componentes/poc-async.component';



@NgModule({
  declarations: [UnsubscribePocComponent,
                PocAsyncComponent,
                PocTakeUntilComponent,
                PocComponent,
                PocBaseComponent,
                PocTakeComponent,
                PocUnsubComponent],
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class UnsubscribeRxjsModule { }
