import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
  }
  routeToGoogle(): void {
    this.authService.doGoogleLogin().then(() => {
      this.ngZone.run(() => {
         this.succesRedirect();
         }
)
    })
      .catch(error => console.log("error"));
  }

  succesRedirect(): void {
    this.router.navigate(['/members']);
  }

}
