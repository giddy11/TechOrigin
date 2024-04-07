let details = {
    "problems" : [{
        "Diabetes" : [{
            "medications" : [{
                "medicationsClasses" : [{
                    "className" : [{
                        "associatedDrug" : [{
                            "name" : "asprin",
                            "dose" : "3 times daily",
                            "strength" : "500 mg"
                        }],
                        "associatedDrug_2" : [{
                            "name" : "cardiotan",
                            "dose" : "2 times daily",
                            "strength" : "200 mg"
                        }]
                    }],
                    "className_2" : [{
                        "associatedDrug" : [{
                            "name" : "amlodipine",
                            "dose" : "once daily",
                            "strength" : "1000 mg"
                        }],
                        "associatedDrug_2" : [{
                            "name" : "Telmisartan",
                            "dose" : "",
                            "strength" : "150 mg"
                        }]
                    }]
                }]
            }],
            "labs" : [{
                "WBC" : 40,
                "RBC" : 67,
                "MP" : "+++"
            }]
        }],
        "Asthma" : [
            {"param_one" : "okay", "param_two" : "not okay"},
            {"param_one" : "fair", "param_two" : "recheck"},
        ],
        "data_one" : [10,40,67,90,54],
        "data_two" : [23,76,90,54]
    }]
}

// Locate the data_one and data_two
let locate_data_one = details.problems[0].data_one
let locate_data_two = details.problems[0].data_two


// Merge the data_one and data_two to form a single list
let merge_data_one_two = locate_data_one.concat(locate_data_two)
// console.log(`The merged data_one and data_two is ${merge_data_one_two}\n\n`)

// Raise the RBC value to the power of the min value in the merge_data_one_two variable
let Locate_RBC_value = details.problems[0].Diabetes[0].labs[0].RBC
min_num = Math.min(...merge_data_one_two)

raised_val = Math.pow(Locate_RBC_value, min_num)
// console.log(`The RBC value ${Locate_RBC_value} raised to the power of the min value ${min_num} in the merge_data_one_two variable is ${raised_val}\n\n`)


// Locate the strength of Cardiotan and Telmisartan
let locate_strength_cardiotan = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug_2[0].strength
let locate_strength_telmisartan = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className_2[0].associatedDrug_2[0].strength
// console.log(`Strength of Cardiotan is ${locate_strength_cardiotan} and the strength of Telmisartan is ${locate_strength_telmisartan}\n\n`)


// Merge className and ClassName_2 to form a single list
// let locate_className = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug[0]
let locate_className = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className
let locate_className_2 = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className_2
// console.log(`className has ${locate_className} and className_2 has ${locate_className_2}\n\n`)
let merge_className_1_2 = locate_className.