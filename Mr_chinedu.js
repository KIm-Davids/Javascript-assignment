let scores = [10,20,30,40,50,60,70,80,90,100]

let firstQuestion = scores.filter(checkScores)

function checkScores(scores){
     return scores >= 70
 }

console.log(firstQuestion)




let numbers = [85,92,78,88,95]

let result = scores.map(addToTheStudentScores)

function addToTheStudentScores(scores){
     return scores * 5
}

console.log(result)




let number = [2,4,6,8,10]

let thirdQuestion = number.map(squareTheNumbers)

function squareTheNumbers(numbers){
    return numbers * numbers
}

console.log(thirdQuestion)


var obj = {}
var secondObj = {}

let members = ["Emily", "Jack", "Sophia","Daniel"]
let books = ["deittel","oop simplified","rich dad poor dad","Guide to investing"]

        let count = 0
        for(eachMembers of members){
            obj[eachMembers] = books[count++];
       }

    
    console.log(obj)   
  
        


let time = ["9:00AM","11:00AM", "1:00PM","3:00PM","5:00PM"]

let fourthQuestion = time.filter(filterTime)

function filterTime(inputTime){
    for(let time in inputTime){
       if(inputTime.includes("PM")){
                return time     
        }
    }
}

console.log(fourthQuestion)


let listOfExpenses = {
    "groceries" : 150,
    "dining out" : 100,
    "transportation" : 50,
    "entertainment" : 80
}

let total = 0

console.log(listOfExpenses["groceries"])
console.log(listOfExpenses["dining out"])


for(elements in listOfExpenses){
    total += listOfExpenses[elements]
}


console.log(total)
