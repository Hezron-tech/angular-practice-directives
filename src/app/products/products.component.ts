import { Component, OnInit } from '@angular/core';
import { Product } from '../interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Product[]=[

    {
      name:'laptop',
      price:200,
      url:'data:image/webp;base64,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',
      inStock:true
    },
    {
      name:'car',
      price:200,
      url:'data:image/jpeg;base64,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',
      inStock:true
    },
    {
      name:'Flash',
      price:200,
      url:'data:image/png;base64,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',
      inStock:false
    },
    {
      name:'desktop',
      price:200,
      url:'data:image/jpeg;base64,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',
      inStock:false
    },
    {
      name:'phone',
      price:200,
      url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAACECAMAAABMKoI6AAAAaVBMVEX////6+vrz8/Pg4ODNzc3GxsaCgoKmpqaNjY1SUlIAAADq6urJyclGRkYwMDCcnJwkJCQ1NTU8PDxXV1dBQUFNTU16enpra2scHRwjHiAfFxqVlZXX19eurq5mZma6uroUFBQPAAYLCwvmaEqPAAAC20lEQVR4nO3cC0+zMBSA4XGHFcqlFPhsKbj//yM/GO5m1B07j2nmeWPMdKl5QoFMZ7vbURR1KQjzPFrLlwfbo0/KdfAbIJ1MC2NaG5eSrfK2t+8tn1TkYYsWUCzn/Ra/rr7E354/VCZViqGCfBXF+35i/tZ+WKqWFlE1nJubwDs+z8K4lmkX7BCPVDIJHl6+3F9EnA//Tr00lwPDTBP3gYdmmsa+vZ6Gaj/MZ9Xwcuo1ux4U113n+0goL1X7m0sozIo1KbP1o9iShdQ3o4QwY4Bkyssmfof8sHfD9GyMXkwYJKW41X2mEHLMGYbJU520Gli2Mp00Q5g6v8x6q4FRnfVJjjF1rGxSq4FhLYxaD9MPgx4jiXQMmf/DoMdIWZyECDPHkvoRUuQYqXWOlNXdnyGVz0QS7pEcPEoukhokkrImSYF0X1Lc/laJdZSsSWjnEpEApbFzJOMeqX8uUoNzX3qAhHWr7OPKmoT0QtdFUmdL4kS6H5EghbxAIhn3SMo9EkuJdD8iQSISJCJBIhIkIkEiEiQiQSISJNYfLEkD/0MkByeOSIBcJFn/fYlIgIgEiUiQiASJSJCIBIlIkJwkYb1h8VykAut/Tp6K5ODEEel+eO+AEwkSkSC5SLJ+u5lIgIgEiUiQiASJSJCIBAmR1BPpfvakJnOOVGdIv+36D5FGjPWfXsc7q4FRI7e1lj+//jPl0uKHejtVtGZduItA0tU8WQzzDqLpSxzSzlTcYqFr3EjZJXmAsG53vZoH8W2TmkV7XEmMszA9qYf6e5tNBKYS7XK9oZzca35a84NJdABLTx2vZCu64zpiFJLn+aqo+Wm3jPvNvGgLk+KsSd/ymR5N23xVe1thOjVirLU+5bEgnFTcGyMgmb5LVTJprFk7knw/CKNpvN1rRZWflCTjlOsA68w+m1igdbhuTXO/UC8XAkM8RJtp3VSFgVs3YEHfoebjTTu+CBv0G/0HKVBfAsmIRmcAAAAASUVORK5CYII=',
      inStock:true
    }
  ]

  name =''
  url =''
  price =0
day=new Date().getDate()

onAdd(){
  this.products.push({
    name:this.name,
    url:this.url,
    price:this.price,
    inStock:true

  })
}


}