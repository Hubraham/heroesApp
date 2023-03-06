import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  constructor(  private authservice: AuthService,
                private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.authservice.varificaAutenticacion()
      .pipe(
        tap(estaAutenticado=> {
          if (!estaAutenticado) {
            this.router.navigate(['./auth/login']);
          }
        })
        );
      // if ( this.authservice.auth.id) {
      //   return true;
      // }
      // console.log('Bloqueado por el AuthGuard - CantActivate')
      // return false;

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {
      
      return this.authservice.varificaAutenticacion()
      .pipe(
        tap(estaAutenticado=> {
          if (!estaAutenticado) {
            this.router.navigate(['./auth/login']);
          }
        })
        );
      // if ( this.authservice.auth.id) {
      //   return true;
        
      // }
      // console.log('canLoad', false)
      // console.log(route)
      // console.log(segments)
      // console.log('Bloqueado por el AuthGuard - CanLoad')
      // return false;
  }
}
