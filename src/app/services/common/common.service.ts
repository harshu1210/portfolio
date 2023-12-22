import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private flag!: boolean;

  public getFlag(): boolean {
    return this.flag;
  }

  public setFlag(value: boolean) {
    this.flag = value;
  }
}
