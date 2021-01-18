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
        newArr[i] = newArr[i].slice(0, 1).toUpperCase() + newArr[i].slice(1).toLowerCase()
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

// Bài 5. Viết function với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString('Hello') => 'olleH'

function reverseString(ele) {
    return ele.split("").reverse().join("")
}
console.log(reverseString("Hello"))

// Bài 6. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường),

// Ví dụ: checkSymmetricString("Race car") => true

// Ví dụ: checkSymmetricString("hello world") => false

function checkSymmetricString(str) {
    if (str.split("").reverse().join("").toLowerCase().split(" ").join("") == str.split(" ").join("").toLowerCase().split(" ").join("")) {
        return true
    }
    return false

}
console.log(checkSymmetricString("Race car"))
console.log(checkSymmetricString("hello world"))

// Bài 7. Viết một function nhận vào string, trả về số lượng nguyên âm có trong string

// Nguyên âm:  a, o, e, u, i.

// Ví dụ: countNumberVowels("hello") => 2

// Ví dụ: countNumberVowels("hello hien") => 4

function countNumberVowels(str) {
    let arr = ["a", "e", "o", "u", "i"]
    let newStr = []
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) { newStr.push(str[i]) }
    }
    return newStr.length
}
console.log(countNumberVowels("hello"))
console.log(countNumberVowels("hello hien"))

// Bài 8. Viết function kiểm tra xem một chuỗi có kết thúc bằng chuỗi khác hay không.

// Ví dụ : confirmEnding("hello", "lo") => true

// Ví dụ : confirmEnding("hello", "ll") => false

//  sử dụng ele.endsWith("lo")
// sử dụng ele.startsWith("he")

function confirmEnding(str1, str2) {
    if (str1.endsWith(str2)) { return true }
    else { return false }
}

console.log(confirmEnding("hello", "lo"))
console.log(confirmEnding("hello", "ll"))

// Bài 9. Viết function lấy ra những chữ cái đầu của từng từ trong chuỗi, các chữ cái đầu được phân tách với nhau bằng dấu cách

// Ví dụ : getFirstLetter("xin chào các bạn") => "x c c b"

// Ví dụ : getFirstLetter("hello world") => "h c"

function getFirstLetter(str) {
    let newStr = str.split(" ")
    for (let i = 0; i < newStr.length; i++) {
        newStr[i]=newStr[i].slice(0,1)
    }
    return newStr.join(" ")
}

console.log(getFirstLetter("xin chào các bạn"))
console.log(getFirstLetter("hello world"))

// Bài 10. Viết function nhập vào 1 chuỗi bất kỳ. Sắp xếp các ký tự trong chuỗi theo chiều tăng dần của bảng chữ cái (có phân biệt chữ hoa, chữ thường). Yêu cầu loại bỏ khoảng trắng trong chuỗi trước khi sắp xếp

// Ví dụ : sortLetters("hello world") => "dehllloorw"

// Ví dụ : sortLetters("HellO WorLd") => "HLOWdellor"

function sortLetters(str){
    return str.split(" ").join("").split("").sort().join("")
}
console.log(sortLetters("hello world"))
console.log(sortLetters("HellO WorLd"))

// Bài 11. Viết function nhập vào 1 chuỗi bất kỳ. Tìm ra ký tự không bị lặp lại trong chuỗi (không tính khoảng trắng)

// Ví dụ : getLetterNoRepeat("abc abce") => "e";

// Ví dụ : getLetterNoRepeat("abce abcdf") => "e,d,f";

// Ví dụ : getLetterNoRepeat("abab") => "";

function getLetterNoRepeat (str){
    let newStr= str.split(" ").join("").split("")
    let str2=[]
    for(let i=0; i<newStr.length;i++){
        if(newStr.lastIndexOf(newStr[i]) == newStr.indexOf(newStr[i])){str2.push(newStr[i])}
    }
    return str2
}
console.log(getLetterNoRepeat("abc abce"))
console.log(getLetterNoRepeat("abce abcdf"))
console.log(getLetterNoRepeat("abab"))