import {Component, OnInit} from '@angular/core'
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup // указываем тип переменной

  ngOnInit() {
    this.form = new FormGroup({ // инициализируем форму
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Kyiv', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    if(this.form.valid) {
      console.log('Form: ', this.form);
      const formData = {...this.form.value}

      console.log('Form Data: ', formData);
    }
  }

  setCapital() {
    const cityMap = {
      ua: 'Kyiv',
      pl: 'Warsaw',
      by: 'Minsk',
      us: 'Washington',
      ca: 'Ottawa'
    }

    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    console.log(city);

    this.form.patchValue({
      address: {city: city} // меняем поле address, его внутреннее поле city
    })
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skils')).push();
    (this.form.get('skills') as FormArray).push(control);

  }
}

