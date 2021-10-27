import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const MatreialComponents = [MatButtonModule, MatIconModule, MatMenuModule];
@NgModule({
  imports: [MatreialComponents],
  exports: [MatreialComponents],
})
export class MaterialModule {}
