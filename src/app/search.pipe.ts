 import { Product } from './interface/index';
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {

//   transform(value: Product[], name:string): Product[] {
//     if(value.length==0){
//       return value
//     }

//     const filtered:Product[]=[]
//     for (let item of value){
//       if(item.name===name ||name==''){
//         filtered.push(item)
//       }
//     }
//     return filtered
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';




@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {



 transform(value:Product[], name:string): Product[] {
    if(value.length==0 || name==''){
      return value
    }
    const filtered:Product[]=[]
    for(let item of value){
      if(item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase())!==-1){
        filtered.push(item)
      }
    }
    return filtered
  }



}
