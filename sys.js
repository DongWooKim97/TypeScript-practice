"use strict";
function f7(a) {
    return `이름은 ${a.name}이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.!`;
}
console.log(f7({ name: 'Mark', age: 38 }));
function person(user) {
    return `제 이름은 ${user.name}이고, ${user.address}사는 ${user.age}입니다.`;
}
console.log(person({ name: '김동우', age: 26, address: '안양' }));
