import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; //component needs to communicate to server

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  allRecords = [];

  constructor(private _httpService : HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.findAllinRecord()
  }

  findAllinRecord(){
    console.log('all records...');
    let observable = this._httpService.findAll();
    observable.subscribe( recordData => {
      console.log('all records have been found successfully', recordData['data']);
      this.allRecords = recordData['data'];
      //console.log('--->', this.allRecords);
    })
  }
  deleteRecord(id){
    console.log('delete this record' + id);
  
    let observable = this._httpService.deleteRecord(id);
    observable.subscribe(deletedData => {
      console.log('record has been deleted', deletedData);
      this.findAllinRecord();
     //  this._router.navigate(['/showAll']);
    });
  }
}
