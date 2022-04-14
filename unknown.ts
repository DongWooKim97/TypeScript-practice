declare const maybe : unknown;

// const aNumber : number = maybe;



if( maybe === true) { 
  const aBoolean : boolean  = maybe;
  // 여기서 maybe는 maybe===true라는 값으로 인해 true가 되어 boolean타입이 됨 그렇기에
  // 아래에 있는 string타입인 aString에 할당 불가 !
  // const aString : string = maybe;
}
// 여기서 maybe는 string이 됨
if (typeof maybe === 'string') { 
  const aString : string = maybe;

  // const aBoolean : boolean = maybe;
}