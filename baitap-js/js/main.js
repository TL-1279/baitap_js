

// bài 1
/** IPO
 ** input:
 *luongMotNgay = 100000 , soNgay, tongLuong

 ** process (từng bước thực hiện)
 * b1: khởi tạo biến
 * b2: tạo hàm tính lương
    luong = luongMotNgay * soNgay
 * B3: lấy giá trị từ form và lưu vào biến
 * B4: tính lương
 * B5: hiển thị kết quả
 * B6 :gắn hàm vào sự kiện click của button
 * 
 ** output:
 *totalSalary => tổng lương 

*/

// B1
let luongMotNgay = 100000;
let soNgay = 0;
let tongLuong = 0;

// B2
function calculateSalary() {
    // B3
    soNgay = document.getElementById("soNgay").value;

    // B4
    tongLuong = Number(luongMotNgay) * Number(soNgay);

    let formattedNum = new Intl.NumberFormat('vi-VN', { 
        style: 'currency', 
        currency: 'VND' 
    }).format(tongLuong);

    // B5
    document.getElementById("tongLuong").innerHTML = "Tổng lương là: " + formattedNum;
}

// B6
document.getElementById("btn1").onclick= calculateSalary;


//bài 2
/**
 * IPO:
 * 
 ** Input:
 * num1, num2, num3, num4, num5
 * 
 ** Process
 * B1: khởi tạo biến
 * B2: tạo hàm tính trung bình
 * B3: lấy giá trị từ form và lưu vào biến
 * B4: tính trung bình
 * B5: hiển thị kết quả
 * B6 :gắn hàm vào sự kiện click của button
 * 
 ** Output:
 * totalAverage => trung bình
 */
// B1
let num1=0 
let num2=0 
let num3=0 
let num4=0 
let num5=0
let totalAverage=0 

//   B2
function average(){
    // B3
         num1= document.getElementById("num1").value 
         num2= document.getElementById("num2").value
         num3= document.getElementById("num3").value
         num4= document.getElementById("num4").value
         num5= document.getElementById("num5").value
    
         console.log(num1,num2,num3,num4,num5)
     // B4
    totalAverage= (Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5))/5
    // B5:
document.getElementById("totalAverage").innerHTML= "Tính trung bình là: "+ totalAverage;
}
//  B6 
document.getElementById("btn2").onclick = average;


//bài 3
/** 
 * IPO:
 * 
 ** Input:
 * num, convertNum
 * 
 ** Process
 * B1: khởi tạo biến
 * B2: tạo hàm tính quy đổi tiền
 * B3: lấy giá trị từ form và lưu vào biến
 * B4: tính quy đổi tiền
 * B5: hiển thị kết quả
 * B6 :gắn hàm vào sự kiện click của button
 * 
 ** Output:
 * convertNum => quy đổi tiền
*/

 // B1:
 let num=0;
 let convertNum=0;
 let numUSD= 23500;
 // B2:
function convert() {
    // B3:
     num = document.getElementById("num").value;
     // B4:
     convertNum = Number(num) * Number(numUSD);

    let formattedNum = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(convertNum);

    // B5:
document.getElementById("convertNum").innerHTML= " Quy đổi tiền: "+ formattedNum;
}
//  B6 
document.getElementById("btn3").onclick = convert;


//bài 4
/** 
 * IPO:
 * 
 ** Input:
 * length, width, perimeter, acreage
 * 
 ** Process
 * B1: khởi tạo biến
 * B2: tạo hàm tính chu vi, diện tích
 * B3: lấy giá trị từ form và lưu vào biến
 * B4: tính chu vi, diện tích
 * B5: hiển thị kết quả
 * B6 :gắn hàm vào sự kiện click của button
 * 
 ** Output:
 * perimeter => chu vi
 * acreage => diện tích
*/
// B1:
let lengt=0;
let width=0;
let perimeter=0;
let acreage= 0;
// B2:
function totalRectangel(){
    // B3: 
    length= document.getElementById("length").value;
    width= document.getElementById("width").value;
    // B4:
     perimeter= (Number(length)+Number(width))*2;
     acreage= Number(length)*Number(width);

// B5:
document.getElementById("totalRec").innerHTML= "chu vi: "+ perimeter +"<br>"+  "diện tích: " + acreage;
}
//  B6 
document.getElementById("btn4").onclick = totalRectangel;



//bài 5
/** 
 * IPO:
 * 
 ** Input:
 * numberInput, digit1, digit2, sum
 * 
 ** Process
 * B1: khởi tạo biến
 * B2: tạo hàm lấy số hàng đơn vị, số hàng chục
 * B3: lấy giá trị từ form và lưu vào biến
 * B4: tính tổng 2 số 
 * B5: hiển thị kết quả
 * B6 :gắn hàm vào sự kiện click của button
 * 
 ** Output:
 * sum => tổng 2 số 
*/
//B1:
let numberInput= 0;
let digit1=0;
let digit2 =0; 
let sum = 0;
//B2: 
function calculateSum(){
    // B3:
    numberInput= document.getElementById("numberInput").value;

     digit1 = Number(Math.floor(numberInput / 10)); 
     digit2 = Number(numberInput % 10); 
     sum = Number(digit1) + Number(digit2);

// B5:
document.getElementById("result").innerHTML= "Tổng của "+numberInput+ " = "+sum;
}
//  B6 
document.getElementById("btn5").onclick = calculateSum;



