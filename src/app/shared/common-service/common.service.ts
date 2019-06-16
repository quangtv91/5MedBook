import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {

  // common function data processing

  isEmpty(value) {
    return (!value || (value.length === 0) || (this.isPlainObject(value) && Object.keys(value).length === 0));
  }

  isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  sumObjectByField(arrayObj: Array<any>, field) {
    if (this.isEmpty(arrayObj)) {
      return 0;
    }
    let sum = 0;
    for (let i = 0, length = arrayObj.length; i < length; i++) {
      sum += (Number(arrayObj[i][field]) || 0);
    }
    return sum;
  }


}
