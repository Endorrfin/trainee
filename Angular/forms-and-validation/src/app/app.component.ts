import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";


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
      password: new FormControl(null, [Validators.required, Validators.maxLength(6)])
    })
  }

  submit() {
    if(this.form.valid) {
      console.log('Form: ', this.form);
      const formData = {...this.form.value}

      console.log('Form Data: ', formData);
    }
  }
}

