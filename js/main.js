// function getUserDetails(userId){
//     var myPromis = new Promise(function(x,y){
//         var user={
//             id :userId,
//             name:"ali",
//             age :15

//         }
//         if(user){
//             x(user)
//         }else{
//             y("Error Message")

//         }
//     })
//     return myPromis
// }
// // getUserDetails(6).then(
// //     function(data){
// // console.log(data)
// //     }
// // ).catch(
// //     function(err)
// // {console.log(err)})

// function getUserId(){
//     var myPromis=new Promise(function(x,y){
//         var user 
//         user=[100,200,300]
//         if(user){
//             x(user)
//         }
//         else{
//             y("Error message")
//         }
//     })
//     return myPromis
    
// }
// getUserId().then(function(user){
//    return getUserDetails(user[0])
// })
// .then(function(user){
//     //console.log(user)
// })

// .catch(function(err){
//     console.log(err)
// })
// async function exc (){
// try {
//     var o =await getUserId()
//     console.log(o)
//     var u = await getUserDetails(o[2])
//     console.log(u)
// } catch (error) {
//     console.log(error)
// }
// }
// exc()

var btn = document.querySelector("#btn")
var table = document.querySelector("#table")
var tbody = document.querySelector(".tbody")
async function display(){
try {
    var respons =await fetch("https://jsonplaceholder.typicode.com/users")
    var user =await respons.json()
    for(var i =0; i<user.length ;i++){
        var tr = document.createElement("tr")
        var td1 =document.createElement("td")
        var td2 =document.createElement("td")
        var td3 =document.createElement("td")
        var td4 =document.createElement("td")
        var td5 = document.createElement("td")
        
        td1.innerHTML=user[i].id,
        td2.innerHTML=user[i].name
        td3.innerHTML=user[i].username
        td4.innerHTML=user[i].email
        td5.innerHTML = `<button>Delete user</button>`
       
        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
    
}} catch (error) {
    console.log(error)
}
 
}


