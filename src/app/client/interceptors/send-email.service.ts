import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function sendEmailInterceptor(request:HttpRequest<any>,next:HttpHandlerFn) {
  if(request.method === 'GET') {
    console.log('welcom');
  }
  return next(request);
}
