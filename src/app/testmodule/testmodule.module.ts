import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingcompComponent } from './testingcomp/testingcomp.component';

@NgModule({
  declarations: [TestingcompComponent],
  imports: [CommonModule],
  exports: [TestingcompComponent],
})
export class TestmoduleModule {}
