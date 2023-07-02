// score có thể là number hoặc string
let score: number | string = 33;

score = 33;
score = "tam";

// lỗi
// const data1: string[] | number[] = ["1", "2", 3];

// combine 2 loại array
const data2: (string | number)[] = ["1", "2", 3];


// có sẵn
let seat: "seat1" | "seat2" | "seat3";
seat = "seat1";

