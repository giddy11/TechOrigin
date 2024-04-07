let date = new Date()

console.log("School Management System")

let studentObject = {
    stud_ID : 1,
    "fname" : "John",
    "lname" : "Doe",
    "age" : 25,
    "gender" : "male",
    "contact_add" : "123 Main St",
    "stud_email" : "john@gmail.com",
    "stud_pass" : "giddy@134"
}

let schedulesObject = {
    "sched_ID" : 1,
    "course_ID" : 1,
    "ins_ID" : 1,
    "sub_ID" : 1,
    "stud_ID" : 1,
    "day" : "Monday",
    "time_start" : "10:00 AM",
    "time_end" : "12:00 PM"
}

let instructorObject = {
    "ins_ID" : 1,
    "fname" : "Jane",
    "lname" : "Doe",
    "age" : 30,
    "gender" : "male",
    "contact_add" : "122 Main St",
    "ins_email" : "jane@gmail.com",
    "ins_pass" : "jane@134"
}

let transactionObject = {
    "trans_ID" : 1,
    "trans_name" : "Tuition Fee",
    "stud_ID" : 1,
    "trans_date" : new Date(date.setFullYear(2022,3,6)),
}

let courseObject = {
    "course_ID" : 1,
    "course_name" : "Petroleum Engineering",
    "course_desc" : "This is under the engineering department",
    "school_yr" : "2024-2029"
}

let subjectObject = {
    "sub_ID" : 1,
    "sub_name" : "Mathematics",
    "course_ID" : 1
}

console.log(transactionObject)