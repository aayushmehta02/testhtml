
const courseClick = document.querySelector('.courseclick')
const right_coloumn = document.querySelector('.right_coloumn')
const addCourse_wrapper = document.querySelector('.addcourse_form_wrapper')
const submit = document.querySelector('.submit')
const course_name_input = document.querySelector('.course_name_input')
const course_name_output = document.querySelector('.course_name_output')
const year_input =document.querySelector('.year_input')
const year_output = document.querySelector('.year_output')










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
    course_name_output.innerText = course_name_input.value
    console.log(course_name_input.value)
    course_name_input.value=""
}

function takeYearInput(){
    year_output.innerText = year_input.value
    console.log(year_input.value)
    year_input.value=""
}