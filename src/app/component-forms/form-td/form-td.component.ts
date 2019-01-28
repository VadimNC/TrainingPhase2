import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsService} from '../../forms.service';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent {
  @ViewChild('formMy') signupForm: NgForm;
  public defaultQuestion = 'teacher';
  public answer  = '';
  public genders: string[] = ['male', 'female'];
  public user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  public submitted = false;

  constructor(private formsService: FormsService) {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
