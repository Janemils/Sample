import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  let resp= http.get('https://www.google.com');
  // let data = { name: 'Bert' };
  // const resp=http.post('https://hkdk.events/0vgUlgs1tuph',JSON.stringify(data),{
  //   headers:{
  //     'Content-Type': 'application/json',
  //     'Accept':'*/*',
  //     'Accept-Encoding': 'gzip, deflate, br',
  //     'Connection':'keep-alive'
  //   }
  // });
  console.log('Response:',resp)

}

