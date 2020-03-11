import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  requiredErrorText = 'This field is required.';
  post: any = '';

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    // let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      date: [null, Validators.required],
      img: [null, Validators.required]
      // description: [null, [Validators.minLength(5), Validators.maxLength(20)]]
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  // checkPassword(formInput) {
  //   const enteredPassword = formInput.value;
  //   const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
  // }

  // getErrorEmail() {
  //   return this.formGroup.get('email').hasError('required')
  //     ? this.requiredErrorText
  //     : this.formGroup.get('email').hasError('pattern')
  //     ? 'Not a valid email address'
  //     : '';
  // }

  // getErrorPassword() {
  //   return this.formGroup.get('password').hasError('required')
  //     ? 'Field is required (at least eight characters, one uppercase letter and one number)'
  //     : this.formGroup.get('password').hasError('requirements')
  //     ? 'Password needs to be at least eight characters, one uppercase letter and one number'
  //     : '';
  // }

  onSubmit(formValue) {
    this.productService.makeupList.push(formValue);
    this.productService.storeMakeupList();

    this.router.navigate(['/home']);
  }
}
