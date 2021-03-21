import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const addCustomers = createAction(
  '[Customer] Load Customers',
  (customer: Customer) => ({customer})
);




