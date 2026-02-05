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


// const studentNAme=document.querySelector("#name")
// const button=document.querySelector(".btn")
// const list=document.querySelector(".list")

// button.addEventListener("click",()=>{

//     //Creating an element

//     const li=document.createElement("li")
//     const deleteButton=document.createElement("button")

//     //providing the text

//     li.innerText=studentNAme.value
//     deleteButton.innerText="Delete"

//     deleteButton.addEventListener("click",()=>{

//         // li.remove(we can also use this to dekete the element)
        
//         list.removeChild(li)
//     })

//     li.appendChild(deleteButton)
//     list.appendChild(li)
//     studentNAme.value=""
// })



// function print(){       //Callback function
//     console.log("Hello students")
// } 

// function greet(print){     //Higher order function
//     setTimeout(() => {
//         console.log("Hello students")
//         print()
//     }, 2000);
// }

// greet(print)



// function finishHomework(callback){
//     console.log("Starting homework")
//     setTimeout(() => {
//         console.log("Homework completed");
//         callback();
//     }, 3000);
// }

// function eatDinner(callback){
//     console.log("Starting dinner")
//     setTimeout(() => {
//         console.log("Dinner Done")
//         console.log("Getting ready to go out")
//         callback();
//     }, 2000);
// }

// function goToPlayground(){
//     console.log("Going to the playground")
// }

// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground();
//     });
// });




// const p=new Promise((res,rej)=>{          // 1st slot always = solve , 2nd always = rejected
//     console.log("Going to do the homework")

//     setTimeout(()=>{
//         const done=true;
//         if(done){
//             res("Success")
//         }else{
//             rej("Failed to fetch data")
//         }
//     },3000);
// })

// p.then((msg)=>{                     //thwn always take resolve 
//     console.log(msg)
// }).catch((error)=>{                 // catch always take rejected
//     console.log(error)
// }).finally(()=>{
//     console.log("Promise is settled")
// })




// function doHomework(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Homework Completed")
//                 res("Homework done")
//             }
//             else{
//                 rej("Homework not done")
//             }
//         },2000)
//     })
//     return p;
// }




// function eatDinner(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Dinner Completed")
//                 res("Dinner done")
//             }
//             else{
//                 rej("Dinner not done")
//             }
//         },2000)
//     })
//     return p;
// }




// function goToPlayground(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Went to pg")
//                 res("PG Time")
//             }
//             else{
//                 rej("Not Allowed")
//             }
//         },2000)
//     })
//     return p;
// }



// doHomework().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground
// }).then((data)=>{
//     console,log(data)
// })
// .catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("All done")
// })


// const p4 =new Promise((res,rej)=>{
//     seTimeout(()=>{
//         res()
//     },0);

// })
// p4.then(()=>{
//     console.log("Inside promise")
// })




function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food ordered")
            res()
        },2000)
    })
}

function prepareFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food prepared")
            res()
        },2000)
    })
}


function deliverFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        console.log("Food delivered")
        res()
    },2000)

    })
    
}
// orderFood().then(()=>{
//     return prepareFood()
// }).then(()=>{
//     return deliverFood()
// }).then(()=>{
//     return console.log("Enjoy your meal")
// })

async function processOrder(){
    await orderFood()
    await prepareFood()
    await deliverFood()
    console.log("Enjoy your meal")
}
processOrder()