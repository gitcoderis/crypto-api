import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: HttpClient) { }

  getPrices() {
    // https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,DASH&tsyms=BTC,USD,EUR
    // https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD
    let url = "https://min-api.cryptocompare.com/data/all/coinlist";
    return this._http.get(url)
      .map(result => this.result = result);
  }

  getCoinInfo(){
    let url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR";
    return this._http.get(url).map(result => this.result = result);
  }

}
