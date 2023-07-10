import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { ValidateUrl } from './url.validator';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit
{
  // contactForm = new FormGroup
  // ({
  //   // firstname: new FormControl(),
  //   firstname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]),
  //   // firstname: new FormControl({ value: "Rahul", disabled: true} ),  //To give a default value//
  //   lastname: new FormControl(),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl()
  // })
 
  // get firstname()
  // {
  //   return this.contactForm.get('firstname');
  // }
 
  // onSubmit() {
  //   console.log("submit");
  //   console.log(this.contactForm.value);
  // }

  validateForm! : FormGroup;

  constructor(private fb:FormBuilder) {}      //Form Builder acts as intermediary

  ngOnInit():void {
    this.validateForm = this.fb.group({
      Pagename : ['', Validators.required],
      myURL : ['', [Validators.required, ValidateUrl]]
    });
  }

  saveForm(form:FormGroup){
    console.log('Valid', form.valid);
    console.log('pagename', form.value.Pagename);
    console.log('URL', form.value.myURL);
  }

  get pagename()
  {
    return this.validateForm.get('pagename');
  }
}
