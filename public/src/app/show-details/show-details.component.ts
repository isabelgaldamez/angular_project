import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; //component needs to communicate to server

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  productInfo = [];
  constructor(private _httpService : HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log('-->', params.id, )
      this.getOneById(params.id);
    });
  }

  getOneById(id){
    let obs = this._httpService.getOneById(id);
    obs.subscribe( AuthorData => {
      console.log('data found : ', AuthorData['data'])
      this.productInfo = AuthorData['data'];
      console.log('product info : ', this. productInfo)
    })
  }
  deleteRecord(_id){
    console.log('delete this record--->' + this._route.snapshot.params._id);
  
    let observable = this._httpService.deleteRecord(_id);
    observable.subscribe(deletedData => {
      console.log('record has been deleted', deletedData);
      this._router.navigate(['/']);
    });
  }

}
