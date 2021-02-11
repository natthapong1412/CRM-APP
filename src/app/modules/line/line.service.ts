import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LineService implements Resolve<any> {

  private onDataChanged$ = new BehaviorSubject<any[]>([]);
  public onDataChangedObserverable$ = this.onDataChanged$.asObservable();

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.getUserdata();
    return
  }

  getUserdata() {
    let body = [
      {
        "createby": "Theerasak Tubrit",
        "_id": "601180e128d90332b8ee5535",
        "contactName": "Sheriff Woody",
        "contactImg": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg?region=0,0,450,450",
        "contactCompany": "บริษัท ละมุนภัณฑ์ เทรดดิ้ง จำกัด",
        "contactPhoneNo": "0623235361",
        "contactEmail": "pee.ch2014@gmail.com",
        "contactLineId": "ppwatchara",
        "contactAddress": "65-1",
        "chat": "สวัสดี",
        "chatDate": "1/12/2020",
        "created": "2021-01-27T15:04:01.496Z",
        "__v": 0,
        "id": "601180e128d90332b8ee5535",
        "updateby": ""
      },
      {
        "createby": "Theerasak Tubrit",
        "_id": "6011843e28d90332b8ee554b",
        "contactName": "arm",
        "contactImg": "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-9/130930240_2268645413270564_2729494356080553767_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGhEmIPirhKwQWHjdza1etoRQXa9IWucuxFBdr0ha5y7JQJvcGcZFsRZ4_AjmAo2HIMsI371MpSmFyVFA7CktZP&_nc_ohc=wnuvk6ACiwQAX9g5CoX&_nc_ht=scontent.fbkk12-3.fna&oh=5287a7f4779c0a82a1c19ffcd7e33880&oe=60405363",
        "contactCompany": "บริษัท ละมุนภัณฑ์ เทรดดิ้ง จำกัด",
        "contactPhoneNo": "0922223569",
        "contactEmail": "pee.ch2014@gmail.com",
        "contactLineId": "cxcxc",
        "contactAddress": "sss",
        "chat": "Hello",
        "chatDate": "12/1/2020",
        "created": "2021-01-27T15:18:22.289Z",
        "__v": 0,
        "id": "6011843e28d90332b8ee554b",
        "updateby": ""
      }
    ]
    return body;
  }


}
