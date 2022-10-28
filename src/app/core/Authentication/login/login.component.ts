import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  public returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: UserService) {
    this.loginForm = this.buildForm();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const username: string = this.f['username'].value
    const password: string = this.f['password'].value

    this.authenticationService.login()
      .subscribe((data) => {
        let user = data.find((user: User) => (user.username === username) && (user.password === password));
        if (user) {
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('user', JSON.stringify(user))
          this.router.navigate([this.returnUrl]);
        } else {
          alert('Invalid Credentials. Try again.');
        }

      });

  }

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
