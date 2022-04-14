function error(message : string) : never { 
  throw new Error(message);
}

function fail() {
  return error('failed');
}

function infiniteLoop() : never {
  while(true){

  }
}


declare let a: string | number;
// a의 타입은 string인데 , if문의 조건을 보면
// string이 아닐 때 이므로, string-string은 never이다 !
// 그렇기에 a의 타입을 보면 never라고 나옴!
if (typeof a!=='string') {
  // a;
  console.log('nono');
}
// 조건부타입

// type Indeable<T> = T extends string ? T & {[index:string]:any}:never;