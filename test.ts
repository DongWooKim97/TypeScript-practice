// function returnAny(message : any) : any {
//   // console.log(message);
//   return message.toString();
// }

// const any1 = returnAny(123123);

// console.log(typeof any1, any1);


let looselyTyped : any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj:any) {
  const a : number = obj.num;
  const b = a+1;
  return b;
}

const c = leakingAny({num : 0});
