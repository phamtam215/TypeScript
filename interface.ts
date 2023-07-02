// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
type User4 = {
  name: string,
  setAge(): string,
}

const user4: User4 = {
  name: "tam",
  setAge: ()=> {
    return "abc"
  }
}

console.log(user4.setAge());

// Giống như type vậy
interface User5 {
  name: string,
  setAge(): string,
}

const user5: User5 = {
  name: "tam",
  setAge: ()=> {
    return "abc"
  }
}

// Điểm khác với type
// 1. Có thể thêm thuộc tính vào 
// biến user5 sẽ báo lỗi vì thiếu trường defaultAge
interface User5 {
  defaultAge: number
}

//2. Kế thừa từ các interface trước

interface User6 extends User5{
  
}



