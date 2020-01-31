import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';

import localeEsEsExtra from '@angular/common/locales/extra/es';

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

// importar locales
import localeEsEs from '@angular/common/locales/es';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenyaPipe } from './pipes/contrasenya.pipe';


registerLocaleData(localeEsEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenyaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue : 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
