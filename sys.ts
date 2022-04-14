function f7(a:{name : string; age : number }) : string {
  return `이름은 ${a.name}이고, 연령대는 ${Math.floor(a.age/10) * 10}대 입니다.!`;
}

console.log(f7({name:'Mark', age : 38}));




function person(user : personInterface) :string{
  return `제 이름은 ${user.name}이고, ${user.address}사는 ${user.age}입니다.`;
}

console.log(person({name : '김동우', age : 26, address : '안양'}));

// interface personInterface {
//   name : string;
//   age : number;
//   address : string;
// }

type personInterface = {
  name : string;
  age : number;
  address : string;
}