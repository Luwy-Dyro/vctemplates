import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    // Opcional
    // this.regresaObservable().pipe(
    //   retry(2)
    // )

    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log ( 'Subs', numero ),
      error => console.error("Error ", error),
      () => console.log("El observador terminó")
    );


   }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log ("destruye");
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any>{

    // let obs = new Observable( observer => {
      return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      
      let intervalo = setInterval( () => {

        // contador += 1;
        contador ++;

        const salida = {
          valor: contador
        };

        observer.next(salida);;

        //Contables
        // if (contador === 3){
        //   clearInterval( intervalo);
        //   observer.complete();
        // }

        //-----------------------
        // if (contador === 2){
        //   //clearInterval( intervalo);
        //   observer.error('Auxilio')
        // }

      }, 1000);

    }).pipe(
      map( resp => {
        return resp.valor;
      }),
      filter( (valor , index) => {
        if ( (valor % 2) === 1 ){
          //impar
          return true;
        }else{
          //par
          return false;
        }
      })
    );

  

  }

}
