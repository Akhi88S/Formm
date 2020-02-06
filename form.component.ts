import { Component, OnInit } from '@angular/core';
import { FormBuilder } from
'@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 checkoutForm;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  private router: Router,
  private formService:FormService
  )
  {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''});
      }
    ngOnInit(){

    }
      onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.formService.changeMessage(customerData.name);
    this.router.navigate(['/display']);
    
    this.checkoutForm.reset();
   
   
  }

}