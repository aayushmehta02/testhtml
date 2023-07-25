
const courseClick = document.querySelector('.courseclick')
const right_coloumn = document.querySelector('.right_coloumn')
const addCourse_wrapper = document.querySelector('.addcourse_form_wrapper')
const submit = document.querySelector('.submit')



const dots = document.querySelector('.dots')



dots.addEventListener("click", ()=>{
    threeDots()
})




function addingcourses(){
    courseClick.addEventListener("click",()=>{
        addCourse_wrapper.classList.add("show")
        submit.addEventListener("click",()=>{
            addCourse_wrapper.classList.remove("show")
            takeCourseInput()
            takeYearInput()
        })
        
    })
}
addingcourses()


function takeCourseInput(){
    const course_name_input = document.querySelector('.course_name_input')
    const course_name_output = document.querySelector('.course_name_output')
    course_name_output.innerText = course_name_input.value
    console.log(course_name_input.value)
    course_name_input.value=""
}

function takeYearInput(){
    const year_input =document.querySelector('.year_input')
    const year_output = document.querySelector('.year_output')
    year_output.innerText = year_input.value
    console.log(year_input.value)
    year_input.value=""
}


function threeDots(){
    const dropdown = document.querySelector('.dropdown-content')
    dropdown.classList.add("show-dropdown-content")
    Window.addEventListener("click",()=>{
        dropdown.classList.remove("show-dropdown-content")
    })
}