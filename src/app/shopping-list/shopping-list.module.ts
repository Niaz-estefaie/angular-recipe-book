import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListRoutingModule } from './shopping-list-rouring.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule, ShoppingListRoutingModule],
  exports: [ShoppingListComponent, ShoppingEditComponent],
  providers: [ShoppingListService],
})
export class ShoppingListModule {}
