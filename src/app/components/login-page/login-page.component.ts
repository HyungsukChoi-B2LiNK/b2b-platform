import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpGatewayService } from '../../services/http-gateway.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginPageType: string;
  isBuyer: boolean;
  email: string;
  password: string;
  isRemember: boolean;

  companyName: string;
  manager: string;
  managerPhoneNumber: string;
  
  modalOn: boolean;
  modalTitle: string;
  modalText: string;

  constructor(
    public httpService: HttpGatewayService,
    public router: Router
  ){ 
    this.loginPageType = 'login';
    this.isBuyer = true;
  }

  ngOnInit() {

  }

  userTypeChoice(event) {
    this.isBuyer = event.target.innerHTML === 'Buyer' ? true : false;
  }

  login() {
    this.router.navigate(['member','home']);
    // this.httpService.post('login', { isBuyer: this.isBuyer, email: this.email, password: this.password }).then((res: any) => {
    //   if(res.answer === 's') {

    //   }
    // });
  }

  signup() {
    this.router.navigate(['signup']);
  }

  forgetId() {
    this.loginPageType = 'forget-id';
    this.modalTitle = 'Forget Your Email';
    this.modalText = `your email is asfasdfasfsdfsadfasfsadf@umma.com`;
    this.inputsReset();

    
  }

  resetPassword() {
    this.loginPageType = 'forget-password';
    this.modalTitle = 'Reset Password';
    this.modalText = 'You have sent a password reset email to your registered email';
    this.inputsReset();
  }

  inputsReset() {
    this.email = '';
    this.password = '';
    this.isRemember = false;
  }

  emailFind() {
    this.modalOn = true;
  }

  passwordFind() {
    this.modalOn = true;
  }

  passwordReset() {
    this.modalOn = true;
  }

  modalOkClick() {
    this.modalOn = false;
  }

  modalResetClick() {
    this.modalOn = false;
  }

}
