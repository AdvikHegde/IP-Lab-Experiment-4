//Code to limit teh maximum length of the Tagline to 25 Characters.
let id = document.getElementById('tagline');
id.addEventListener('input',()=>{
  if (id.value.length > 25){
    alert('Please enter a max of 25 characters.');
    id.value = id.value.slice(0, 25); 
  }
})

//Code to limit the maximum length of the Phone number to 10 numbers.
let phone_number = document.getElementById('phone');
phone_number.addEventListener('input',()=>{
  if (phone_number.value.length > 10){
    alert('10 digit limit exceeded.Please enter correct number. ')
    phone_number.value = phone_number.value.slice(0,10);
  }
})

function generateReceipt(event) {
  event.preventDefault();

  let receipt = document.querySelector('.receipt-div');
  receipt.style.display = 'block';

  // // Get form values
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let mail = document.getElementById('email').value;
  let address = document.getElementById('address').value;

  let tagline = document.getElementById('tagline').value;
  let color = document.getElementById('color').value;
  let size = document.getElementById('size').value;
  let quantity = document.getElementById('quantity').value;


  // // Create receipt date
  let receiptDate = new Date().toLocaleString();

  // Set receipt values
  document.getElementById('receiptDate').innerText = `Date: ${receiptDate}`;
  document.getElementById('receiptName').innerText = `Name: ${name}`;
  document.getElementById('receiptTagline').innerText = `Tagline: ${tagline}`;
  document.getElementById('receiptSize').innerText = `size: ${size}`;
  document.getElementById('receiptPhone').innerText = `Phone: ${phone}`;
  document.getElementById('receiptEmail').innerText = `Mail: ${mail}`;
  document.getElementById('receiptAddress').innerText = `Address: ${address}`;
  document.getElementById('receiptColor').innerText = `Color: ${color}`;
  document.getElementById('receiptQuantity').innerText = `Quantity: ${quantity}`;

}

//Close option to hide the receipt once displayed and viewed and display confirmation message.
function hidereceipt(){
  let receipt = document.querySelector('.receipt-div');
  receipt.style.display = 'none';

  let confirmation = document.querySelector('.order-confirmation');
  confirmation.style.display = 'block';
}

//Close the confirmation message as well once viewed.
document.querySelector('.close-button').addEventListener('click',()=>{
  let confirmation = document.querySelector('.order-confirmation');
  confirmation.style.display = 'none';
});

class Person {
  constructor(name, mail, phone) {
      this.name = name;
      this.mail = mail;
      this.phone = phone;
  }

  // Member function using Arrow function (non-member example shown later)
  displayDetails = () => {
      return `Name: ${this.name}, Email: ${this.mail}, Phone: ${this.phone}`;
  }
}
let details = new Person('John Doe', 'johndoe@example.com', '123456789');
console.log(details.displayDetails())


class Student extends Person {
  constructor(name, email, phone, rollNo) {
      super(name, email, phone);  // Call the constructor of the Person class
      this.rollNo = rollNo;
  }

  // Overriding the displayDetails method
  displayDetails() {
      if (this.rollNo === 0) {
          throw new Error('Roll number cannot be zero!');
      }
      return `${super.displayDetails()}, Roll No: ${this.rollNo}`;
  }
}
// Creating an instance of the Student class
let student = new Student('Jane Doe', 'janedoe@example.com', '987654321', 101);
// Using the displayDetails method to print the student's details
console.log(student.displayDetails());
