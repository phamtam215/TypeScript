// OBJECT
function sum(point) {
  return point.x + point.y;
}
sum({ x: 20, y: 30 });
console.log('sum({ x: 20, y: 30 }): ', sum({ x: 20, y: 30 }));


// READ ONLY and OPTIONAL
type User = {
  readonly _id: string, // trường này sau khi define là không sửa được nữa, vì nó chỉ mang tính chất read-only mà thôi
  name: string,
  age: number,
  isActive: boolean,
  detail?: number // trường này có thể define trong các object sau này hoặc không
}

let user1: User = {
  _id: "23",
  name: "tam23",
  age: 23,
  isActive: true
}

// user1._id = "25" => Error
console.log('user1: ', user1);
// không báo lỗi chỉ hiện ra detail là undefined thôi
console.log('user1 details: ', user1.detail);



let user2: User = {
  _id: "22",
  name: "tam22",
  isActive: true,
  age:25,
  detail: 265
}

console.log('user2: ', user2);

