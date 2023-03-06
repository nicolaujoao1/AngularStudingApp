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

usuarioObservable(nome:string, email:string):Observable<Usuario>{
  return new Observable(
    subscribe=>{
      let usuario=new Usuario(nome, email);
      if(nome==='Admin'){
        setTimeout(()=>subscribe.next(usuario),1000);
        setTimeout(()=>subscribe.next(usuario),2000);
        setTimeout(()=>subscribe.next(usuario),3000);
        setTimeout(()=>subscribe.next(usuario),4000);
        setTimeout(()=>subscribe.complete(),5000);
      }

    }
  );
}

 myObservable(name:string):Observable<string>{
  return new Observable(subscribe=>{
      if(name==='Ilola'){
        subscribe.next(`Olá ${name}`);
        subscribe.next(`Ola novamente ${name}`);
        setTimeout(()=> subscribe.next(`Olá com Delay ${name}`),10000);
        subscribe.complete();
      }
      else{
        subscribe.error('Ops! Oucorreu um erro');
      }
  });
 }

 ngOnInit(): void {
    
   const obs= this.usuarioObservable('Admin','admin@gmail.com');
   const subs= obs.subscribe(
     result=>console.log(result),
     error=>console.log(error),
     ()=>console.log("FIM")
   );
   setTimeout(() => {
     subs.unsubscribe();
   }, 3500);
  //  this.myObservable('Ilola')
    //  .subscribe(
    //   result=>console.log(result),
    //   error=>console.log(error),
    //  ()=>console.log('FIM')
    //   );
 
    // this.myPromise('Ilola')
    // .then(result=>console.log(result))
    // .catch(error=>console.log(error));
     
     }  
 
}
export class Usuario{
  private nome:string;
  private email:string;  
  constructor(nome:string, email:string){
    this.nome=nome;
    this.email=email;
  }
  
}
