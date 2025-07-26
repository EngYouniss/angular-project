import {  HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import {  NgxSpinnerService } from "ngx-spinner";
import { finalize, Observable } from "rxjs";

export function LoadingInterceptorService (req: HttpRequest<any>, next: HttpHandlerFn){
    const spinner=inject(NgxSpinnerService)
    spinner.show();
   return next(req).pipe(
    finalize(() => spinner.hide())
  );

}
