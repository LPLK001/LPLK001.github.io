let str = "Hello world"
// indexOf - lastIndexOf 
console.log(str.indexOf("lo"))
console.log(str.indexOf("loo"))

console.log(str.lastIndexOf("o"))
console.log(str.lastIndexOf("loo"))

// includes
console.log(str.includes("lo"))
console.log(str.includes("loo"))

// slice 
console.log(str.slice(0, 5));
console.log(str.slice(6));
console.log(str.slice());
console.log(str.slice(str.length - 1));
console.log(str.slice(-5));

// substring 
console.log(str.substring(0, 5))
console.log(str.substring(6))
console.log(str.substring())
console.log(str.substring(-1))
console.log(str.substring(str.length - 1))

// substr(vị trí ban đầu, độ dài chuỗi)
console.log(str.substr(0, 5))

// in thường - in hoa chữ
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// cộng chuỗi 
console.log(str.concat(" abc ", "haha ", "hihi"))

// Loại bỏ khoảng trắng ở đầu và cuối chuỗi 
let str1 = " hihi "
console.log(str1.trim())

// charAt(n) Tìm kí tự ở vị trí 
console.log(str.charAt(0))
console.log(str.charAt(1))

// chuyển từ chuỗi thành mảng 
console.log(str.split(" "))
console.log(str.split(""))
console.log(str.split("o"))
console.log(str.split("k"))

// Bài 1. Viết function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không
// Ví dụ: checkStringExist("i love you", "you") => true
// Ví dụ: checkStringExist("i love you", "hate") => false

function checkStringExist(ele1, ele2) {
    return ele1.includes(ele2)
}
console.log(checkStringExist("i love you", "you"))
console.log(checkStringExist("i love you", "hate"))

// Bài 2. Viết function rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi.
// Ví dụ: shortenString('Xin chào các bạn') => 'Xin chào...'
// Ví dụ: shortenString('Hello') => 'Hello'

function shortenString(ele) {
    if (ele.length > 8) {
        return ele.slice(0, 8) + "..."
    }
    else { return ele }
}
console.log(shortenString('Xin chào các bạn'))
console.log(shortenString('Hello'))

// Bài 3. Viết function có tác dụng biến 1 chuỗi thành chuỗi chỉ viết hoa từ đầu tiên.
// Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') => 'Chào Mừng Đến Với Techmaster'

function capitalizeString(ele) {
    let newArr = ele.split(" ")
    for (let i = 0; i < newArr.length; i++) {
        newArr[i]=newArr[i].slice(0,1).toUpperCase()+newArr[i].slice(1).toLowerCase()
    }
    return newArr.join(" ")
}
console.log(capitalizeString("chÀo MừnG đẾn với techMaster"))
// Bài 4. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết function có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString('a', 5) => 'a-a-a-a-a'

function repeatString(str, n) {
    let newStr = str
    for (let i = 0; i < n - 1; i++) {
        newStr += `-${str}`
    }
    return newStr
}
console.log(repeatString("a", 5))