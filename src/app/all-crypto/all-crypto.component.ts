import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-all-crypto',
  templateUrl: './all-crypto.component.html',
  styleUrls: ['./all-crypto.component.scss'],
  animations: [

    trigger('topCryptos', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('40ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .1, transform: 'translateY(55px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class AllCryptoComponent implements OnInit {
  objectKeys = Object.keys;
  objectValues = Object.values;
  objectEntries = Object.entries;
  cryptos: any; // visa getPrices() data
  coinInfo:any; // visa data is getCoinInfo

  // manoArray:any = [];

  topCoins = {1: 'BTC', 2: 'ETH', 3: 'XRP', 4: 'BCH', 5: 'LTC', 6: 'NEO', 7: 'ADA', 8: 'XLM', 9: 'EOS', 10: 'XMR', 11: 'IOT', 12: 'DASH', 13: 'XEM', 14: 'TRX', 15: 'ETC'};
  topCryptos = this.objectToString(this.topCoins).split(','); //10 defaultiniu kriptovaliutu ID is topCoins

  constructor(private _data: DataService) { }

  ngOnInit() {
    console.log(this.topCryptos);
    this._data.getPrices()
      .subscribe(res => {
        console.log(res);
        this.cryptos = res;
        // this.topCryptos = this.cryptos.DefaultWatchlist.CoinIs.split(',');
        // console.log(this.topCryptos);
          // for(let x in this.cryptos.Data) {
          //
          //   //gaunu ID ir lyginu ji su topCryptos id
          //   for(let i=0;i<this.topCryptos.length; i++){
          //     if(this.cryptos.Data[x].Symbol === this.topCryptos[i]){
          //       this.manoArray.push(this.cryptos.Data[x].Symbol);
          //     }
          //   }
          //
          // }

          });

      this._data.getCoinInfo(this.objectToString(this.topCoins), 'USD').subscribe(res => {
        this.coinInfo = res;
        console.log(this.coinInfo);
        });

        // console.log(this.coinInfo.RAW.BTC.USD.CHANGEPCT24HOUR);
  }

  objectToString(obj: any){
    let valueArr = [];
    for(let key in obj) {
      valueArr.push(obj[key]);
    }
    return valueArr.join(',');
  }

  changeColor(coin:string) {
    (this.coinInfo.RAW[coin].USD.CHANGEPCT24HOUR > 1) ? true : false;
  }

}
