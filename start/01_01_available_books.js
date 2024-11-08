// Write your code here
class books {
  constructor(title = 'Harry', author, isbn, numCopies = 0) {
    this.title = title
    this.author = author
    this.isbn = isbn
    this.numCopies = numCopies;
  }

  get availability () {
    return this.getAvailability()
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return 'out of stock'
    } else if (this.numCopies < 10){
      return 'low stock'
    } else if (this.numCopies > 10) {
      return 'in stock'
    } else {
      return 'stock issue'
    }
  } 

  sell =  function (num = 1) {
    if (num > 0) {
      console.log(this.numCopies)
      this.numCopies = this.numCopies - num
    }
  }

  restock =  function (num = 5) {
    if (num > 0) {
      this.numCopies = this.numCopies + num
    }
  }
}

let bukshap = new books('murphy', 'sda', 122313)
console.log(bukshap.availability)
bukshap.sell(4)
bukshap.restock(14)
console.log(bukshap.availability)
