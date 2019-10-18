import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  recordName : {
    name : '',
    qty : 0,
    price: 0
  };
  constructor(private _httpService : HttpService, private _route: ActivatedRoute, private _router: Router) { }

 
  ngOnInit() {
   
    this.recordName = {
      name : '',
      qty : 0,
      price: 0
    }
  }
  createRecord(){
    // console.log('---->', this.recordName.name);
    // console.log('---->', this.recordName.qty);
    // console.log('---->', this.recordName.price);
    let observable = this._httpService.createNew(this.recordName);
    observable.subscribe(data => {
      console.log('create ts', data);
      this._router.navigate(['/']);
    })
  }

}
