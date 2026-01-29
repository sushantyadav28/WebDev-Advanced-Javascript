// const para=document.getElementsByClassName("para")       //Returns HTMLCollection
// para[0].textContent="This is updated one"
// para[1].textContent="This is updated two"
// console.log(para)



// const para=document.querySelectorAll(".para")       //Returns NodeList
// para[0].textContent="This is updated one"
// para[1].style.color="green"
// console.log(para)



// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a heading</h1>"
// console.log(container)



// const button=document.querySelector("button")
// button.classList.add("btn")

// debugger
// console.log(a)
// console.log(b)


// var a=3453
// let b=456;

// console.log(a)
// console.log(b)

// function print(){
//     let c= 40
//     console.log("inside fn")
// }

// console.log(c)

// print()


const studentNAme=document.querySelector("#name")
const button=document.querySelector(".btn")
const list=document.querySelector(".list")

button.addEventListener("click",()=>{

    //Creating an element

    const li=document.createElement("li")
    const deleteButton=document.createElement("button")

    //providing the text

    li.innerText=studentNAme.value
    deleteButton.innerText="Delete"

    deleteButton.addEventListener("click",()=>{

        // li.remove(we can also use this to dekete the element)
        
        list.removeChild(li)
    })

    li.appendChild(deleteButton)
    list.appendChild(li)
    studentNAme.value=""
})



function print(){       //Callback function
    console.log("Hello students")
}

function greet(print){     //Higher order function
    setTimeout(() => {
        console.log("Hello students")
        print()
    }, 2000);
}

greet(print)