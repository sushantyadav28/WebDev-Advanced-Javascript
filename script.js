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



// console.log("Frst Line")
// setTimeout(() => {
//     console.log("Inside setTimeout")
// }, 0);
// const promise = new Promise((resolve, reject) => {
//     resolve("Promise Resolved")
// });
// promise.then((message) => {
//     console.log(message)
// });
// const promise2 = new Promise((resolve, reject) => {
//     resolve("Second Promise Resolved")
// });
// promise2.then((message2) => {
//     console.log(message2)
// });
// const promise3 = new Promise((resolve, reject) => {
//     resolve("Third Promise Resolved")
// });
// promise3.then((message3) => {
//     console.log(message3)
// });
// console.log("Last Line")


//# Event Loop: This mechanism ensures that asynchronous operations are handled properly without blocking the main thread.
// 1. Call Stack: Synchronous code is executed here.
// 2. Web APIs: Asynchronous operations like setTimeout are handled here. It send a callback to the Callback Queue once 
//    the operation is complete.
// 3. Callback Queue: Callbacks from Web APIs are queued here. They wait for the call stack to be empty before 
//    being executed.
// 4. Microtask Queue: Promises are handled here with higher priority than Callback Queue. Event loop checks this queue 
// before the Callback Queue and executes any pending microtasks before moving to the next task in the Callback Queue.
// Note:- If call stack is empty, microtasks are executed first, followed by callbacks from the callback queue.
// Output Order: First Line,
//               Last Line,
//               Promise Resolved
//               Inside setTimeout, because microtasks (promises) have higher priority than macrotasks (setTimeout).

// function orderfood(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Food Ordered")
//             resolve()
//         }, 2000);
//     })
// }

// function cookfood(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Food Cooked")
//             resolve()
//         }, 3000);
//     })
// }

// function eatfood(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Food Eaten")
//             resolve()
//         }, 1000);
//     })
// }

// // orderfood().then(()=>{
// //     return cookfood()
// // }).then(()=>{
// //     return eatfood()
// // }).then(()=>{
// //     console.log("All done")
// // })

// async function processfood(){
//     await orderfood()
//     await cookfood()
//     await eatfood()
//     console.log("All done")
// }

// processfood()

// console.log("Its the first line")
// try{
//     let age=19;
//     if(age<18){
//         throw new Error("Not allowed to vote")
//     }
//     let sample;
//     for(let i =0;i<10;i++){
//         sample=i
//     }

// }
// catch(error){
//     console.log(error)
//     throw new Error("Please check the age ")
// }finally{
//     console.log("This will always execute")

// }
// console.log("Its the last line")

// async function getData(){
//     try{
//         const response = await fetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log(response.ok);
//         if (!response.ok) {
//             throw new Error("Something Went Wrong");
//         }
//         data.products.forEach(product => {
//             console.log(product.title);
//         });
//     }catch(err){
//         console.log(err);
//     }
// }
// getData();


async function getData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                title:"foo",
                body:"bar",
                userId:1
            })
        });
        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        const data = await response.json();
        console.log(data)
        // data.products.forEach(product => {
        //     console.log(product.title);
        // });
    }catch(err){
        console.log(err);
    }
}
getData();
