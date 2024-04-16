let details = {
    problems : [{
        Diabetes: "medications",
        labs: "WBC"
    }],
    Asthma:"Param_one",
    data_one: [10,40,67,90,54],
    data_two: [23,76,90,54]
}

//locate medications
console.log(details.problems[0].Diabetes)

//locate WBC
console.log(details.problems[0].labs)


//locate data_one => [10,40,67,90,54]
console.log(details.data_one)

//locate data_two => [23,76,90,54]
console.log(details.data_two)

