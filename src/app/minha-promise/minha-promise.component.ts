import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-minha-promise',
  templateUrl: './minha-promise.component.html',
  styleUrls: ['./minha-promise.component.css']
})
export class MinhaPromiseComponent implements OnInit{

myPromise(name:string):Promise<string>{
  return new Promise((resolve, reject) =>{
    if(name==='Ilola'){
    //  resolve(`Olá ${name}`)
      setTimeout(()=>resolve(`Olá meu nome é ${name}`),5000)
    }
    else{
      reject('Ops!Oucorreu um erro..');
    }
  });
}

 myObservable(name:string):Observable<string>{
  return new Observable(subscribe=>{
      if(name==='Ilola'){
        subscribe.next(`Olá ${name}`);
        subscribe.next(`Ola novamente ${name}`);
        setTimeout(()=> subscribe.next(`Olá com Delay ${name}`),5000);
      }
      else{
        subscribe.error('Ops! Oucorreu um erro');
      }
  });
 }

 ngOnInit(): void {
    //  this.myObservable('')
    //  .subscribe(
    //   result=>console.log(result),
    //   error=>console.log(error)
    //   );
 
    this.myPromise('Ilola')
    .then(result=>console.log(result))
    .catch(error=>console.log(error));
     
 }

}
