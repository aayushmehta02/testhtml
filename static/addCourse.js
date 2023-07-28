const courseClick = document.querySelector('.courseclick')
const right_coloumn = document.querySelector('.right_coloumn')
const addCourse_wrapper = document.querySelector('.addcourse_form_wrapper')
const submit = document.querySelector('.submit')
const allCourses = document.querySelector('.courses')
const course_name_input = document.querySelector('.course_name_input')
const course_name_output = document.querySelector('.course_name_output')
const left_coloumn = document.querySelector('.left_coloumn')
const dots = document.querySelector('.dots')
const year_input =document.querySelector('.year_input')
const year_output = document.querySelector('.year_output')
const perCourse = document.querySelector('.course1')
 
let count = 0
Number(count)

dots.addEventListener("click", ()=>{
    threeDots()
})


function addingcourses(){
    courseClick.addEventListener("click", ()=>{
        addCourse_wrapper.classList.add("show")
        
        right_coloumn.classList.add("blur")
        left_coloumn.classList.add("blur")


    })
    
    
}



addingcourses()

function submitFields(){
    submit.addEventListener("click",()=>{
        addCourse_wrapper.classList.remove("show")
        takeCourseInput()
        takeYearInput()
        removeText()
        count++
        createNewCourse()
        console.log(count)
    })

}
submitFields()
function removeText(){
    const text = document.querySelector('.middle')
    
    if(course_name_input.value=="" && year_input.value==""){
        console.log("done")
        text.classList.add("hidden")
        blur()
    }else{
        alert("PLEASE ENTER COURSE NAME OR CLASS!!")
        
        blur()
    }
    

}

function takeCourseInput(){
 
    course_name_output.innerText = course_name_input.value
    console.log(course_name_input.value)
    course_name_input.value=""
}

function takeYearInput(){
   
    year_output.innerText = year_input.value
    console.log(year_input.value)
    year_input.value=""
}


function threeDots(){
    const dropdown = document.querySelector('.dropdown-content')
    dropdown.classList.add("show-dropdown-content")
    
}



function createNewCourse(){
   if(count==1){
    console.log("sorted")
    allCourses.classList.remove("hidden")
   }
   else{
    const deepCopy = perCourse.cloneNode(true);
    deepCopy.classList.add("course1")
    const deep_course_name_output= deepCopy.querySelector('h4')
    const deep_year_output = deepCopy.querySelector('h5')
    // deep_course_name_output.innerText= course_name_input.value
    // deep_year_output.innerText = year_input.value
    takeCourseInput()
    takeYearInput()
    allCourses.appendChild(deepCopy);
    console.log("working")
    allCourses.classList.remove("hidden")
    



   }
   
}

function blur(){
    right_coloumn.classList.remove("blur")
    left_coloumn.classList.remove("blur")
}

