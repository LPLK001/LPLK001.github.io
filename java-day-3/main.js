let arr = [1,2,3,4]
// ========= push : Thêm phần tử vào cuối mảng. Trả về độ dài của mảng sau khi thêm
let push = arr.push(5);
console.log("Độ dài của mảng mới: ", push)
console.log("Mảng sau khi thêm phần tử: ", arr)

// ========= pop : Xóa phần tử ở cuối mảng. Trả về phần tử bị xóa
let pop = arr.pop();
console.log("Phần tử bị xóa: ", pop)
console.log("Mảng sau khi xóa phần tử: ", arr)

// ========= unshift : Thêm phần tử vào đầu mảng. Trả về độ dài của mảng sau khi thêm
let unshift = arr.unshift(0);
console.log("Độ dài của mảng mới: ", unshift)
console.log("Mảng sau khi thêm phần tử: ", arr)

// ========= shift : Xóa phần tử ở đầu mảng. Trả về phần tử bị xóa
let shift = arr.shift();
console.log("Phần tử bị xóa: ", shift)
console.log("Mảng sau khi xóa phần tử: ", arr)

// ========= slice : Cắt 1 mảng con từ mảng ban đầu (không thay đổi mảng ban đầu)
// Trường hợp 1: Truyền đủ 2 tham số
// slice(a,b) : trong đó a - vị trí bắt đầu, b - vị trí kết thúc
let newArr = arr.slice(0,3); // lấy phần tử ở vị trí 0,1,2
console.log(newArr)

// Trường hợp 2 : Truyền 1 tham số
// slice(a) => lấy từ vị trí a đến hết mảng
let newArr1 = arr.slice(1);
console.log(newArr1);

// Trường hợp 3 : không truyền tham số
// slice() : Lấy tất cả các phần tử
let newArr2 = arr.slice();
console.log(newArr2);

// ========= reverse(): Đảo ngược vị trí của các phần tử trong mảng
let reverseArr = arr.reverse();
console.log(reverseArr);

// ========= join(): Tách từ mảng thành chuỗi
let joinArr = arr.join(); // Nếu không truyền gì vào join, thì các phần tử trong mảng sẽ ghép thành chuỗi và phần tách với nhau bằng dấu ","
console.log(joinArr);

// Trường hợp truyền dấu phần tách vào trong join
let joinArr1 = arr.join("-"); // các phần tử phân tách bằng dâu "-"
console.log(joinArr1)

let joinArr2 = arr.join(" "); // các phần tử phân tách bằng dâu cách " "
console.log(joinArr2)

// ========= indexOf() : Kiểm tra 1 phần tử có nằm trong mảng hay không
// Nếu có trả về vị trí đầu tiên của phần tử đó trong mảng
// Nếu không có => trả về -1
console.log(arr)
console.log(arr.indexOf(4)) // => giá trị 4 nằm ở vị trí 0 trong mảng
console.log(arr.indexOf(5)) // => không có giá trị 5 => trả về -1

// ========= lastIndexOf() : Kiểm tra 1 phần tử có nằm trong mảng hay không
// Nếu có trả về vị trí cuối của phần tử đó trong mảng
// Nếu không có => trả về -1
let arr1 = [1,2,3,4,5,6,3,4];
console.log(arr1)
console.log(arr1.lastIndexOf(3)) // => giá trị 3 nằm ở vị trí 6 (vị trí cuối cùng) trong mảng
console.log(arr1.lastIndexOf(7)) // => không có giá trị 7 => trả về -1


