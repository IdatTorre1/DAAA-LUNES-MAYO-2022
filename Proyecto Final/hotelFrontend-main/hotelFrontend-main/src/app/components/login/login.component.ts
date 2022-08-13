import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUsuario!: LoginUsuario;
  correo!: string;
  clave!: string;

  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router //private toastr: ToastrService
  ) {}

  ngOnInit() {}

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.correo, this.clave);
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        //console.log(data);
        this.tokenService.setToken(data.token);
        this.router.navigate(['dashboard']);
      },
      (err) => {
        //console.log(err);
        swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }

  ingresar() {
    this.router.navigate(['dashboard']);
  }
}
