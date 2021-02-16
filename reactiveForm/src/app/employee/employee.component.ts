import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  form;

  // form builder method
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstname: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")
      ]],
      lastname: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      contactNumber: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[6-9][0-9]*$")
      ]],
      alternateCN: ['', [
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[6-9][0-9]*$")
      ]],
      designation: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")
      ]],
      experience: ['', Validators.required],
      joiningDate: ['', Validators.required],
      address: ['', Validators.minLength(25)],
      city: ['', Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")],
      state: ['', Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")],
      pincode: ['', [
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern("^[1-9][0-9]*$")
      ]],
      panNumber: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[A-Za-z]{5}[0-9]{4}[A-Za-z]*$")
      ]],
      adharNumber: ['', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
        Validators.pattern("^[2-9][0-9]*$")
      ]],
      passportNumber: ['', [
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern("^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$")
      ]]
    });
  }
  
  // get firstname
  get firstname() {
    return this.form.get('firstname');
  }
  
  // get lastname
  get lastname() {
    return this.form.get('lastname');
  }
  
  // get email
  get email() {
    return this.form.get('email');
  }
  
  // get contactNumber
  get contactNumber() {
    return this.form.get('contactNumber');
  }
  
  // get alternate contactNumber
  get alternateCN() {
    return this.form.get('alternateCN');
  }
  
  // get designation
  get designation() {
    return this.form.get('designation');
  }
  
  // get experience
  get experience() {
    return this.form.get('experience');
  }
  
  // get joiningDate
  get joiningDate() {
    return this.form.get('joiningDate');
  }
  
  // get address
  get address() {
    return this.form.get('address');
  }
  
  // get city
  get city() {
    return this.form.get('city');
  }
  
  // get state
  get state() {
    return this.form.get('state');
  }
  
  // get pincode
  get pincode() {
    return this.form.get('pincode');
  }
  
  // get panNumber
  get panNumber() {
    return this.form.get('panNumber');
  }
  
  // get adharNumber
  get adharNumber() {
    return this.form.get('adharNumber');
  }
  
  // get adharNumber
  get passportNumber() {
    return this.form.get('passportNumber');
  }

  // on submit 
  submit() {
    if(this.form.valid){
      Swal.fire({
        title: 'Thank you...', 
        text: 'Data submitted succesfully!', 
        icon: 'success'
      })
      console.log(this.form.value);
    }else {
      Swal.fire({
        title: 'Oops...', 
        text: 'Please, Fill all the Required Fields!', 
        icon: 'error'
      })
    }
  }

}
