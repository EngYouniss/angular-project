import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';


export const apiInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req);
};
