console.log("hi")
const courseClick = document.querySelector('.courseclick')
const right_coloumn = document.querySelector('.right_coloumn')


function addingcourses(){
    courseClick.addEventListener("click",()=>{
        console.log("hi")
        right_coloumn.style.filter = "blur"
        
    })
}
addingcourses()