let width = Number(prompt("Volume of the box, enter width", 0));
let height = Number(prompt("Volume of the box, enter height", 0));
let length = Number(prompt("Volume of the box, enter length", 0));

if (isNaN(width) || isNaN(height) || isNaN(length) || width <= 0 || height <= 0 || length <= 0) {
    alert("Please enter valid positive numbers for width, height, and length!");
} else {
    let volume = width * height * length;
    alert(`Calculated box volume is ${volume}`);
}