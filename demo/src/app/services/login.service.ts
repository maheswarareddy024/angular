import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
// private url= 'https://api.publicapis.org/entries';
 private url = 'https://catfact.ninja/fact';
 private url1 = 'https://api.coindesk.com/v1/bpi/currentprice.json'
 public url2= 'https://www.boredapi.com/api/activity'
 private url3='https://api.agify.io?name=meelad'
 private url4='https://dog.ceo/api/breeds/image/random'
 private url5='https://official-joke-api.appspot.com/random_joke'
 private url6='https://randomuser.me/api/'
 private url7='https://ipinfo.io/161.185.160.93/geo'
 private url8='https://api.nationalize.io?name=nathaniel'
 private url9='https://datausa.io/api/data?drilldowns=Nation&measures=Population'
private url10='http://universities.hipolabs.com/search?country=United+States'



 constructor(private http: HttpClient) {}
 getCatFact() {
   return this.http.get(this.url);
 }
 getCoinDesk()
 {
  return this.http.get(this.url1)
 }
 getBored()
 {
  return this.http.get(this.url2)
 }
 getAgify()
 {
  return this.http.get(this.url3)
  
 }
 getDogs()
 {
  return this.http.get(this.url4)
 }
 getJokes()
 {
  return this.http.get(this.url5)
 }
getRandomUser()
{
  return this.http.get(this.url6)
}
getIpinfo()
{
  return this.http.get(this.url7)
}
getNationalize()
{
  return this.http.get(this.url8)
}
getDatausa()
{
  return this.http.get(this.url9)
}
getUniversities()
{
  return this.http.get(this.url10)
}
}
