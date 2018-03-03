import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-crypto',
  templateUrl: './all-crypto.component.html',
  styleUrls: ['./all-crypto.component.scss']
})
export class AllCryptoComponent implements OnInit {
  objectKeys = Object.keys;
  cryptos: any; // visa getPrices() data
  topCryptos: any = []; //10 defaultiniu kriptovaliutu ID is getPrices()
  coinInfo:any; // visa data is getCoinInfo

  manoArray:any = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        console.log(res);
        this.cryptos = res;
        this.topCryptos = this.cryptos.DefaultWatchlist.CoinIs.split(',');
        console.log(this.topCryptos);
        for(let x in this.cryptos.Data) {

          //gaunu ID ir lyginu ji su topCryptos id
          for(let i=0;i<this.topCryptos.length; i++){
            if(this.cryptos.Data[x].Id === this.topCryptos[i]){
              this.manoArray.push(this.cryptos.Data[x]);
            }
          }

        }

      });
      console.log(this.manoArray);

      this._data.getCoinInfo().subscribe(res => {
        this.coinInfo = res;
        console.log(this.coinInfo.RAW);
      });

  }

}
