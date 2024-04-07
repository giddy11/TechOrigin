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

// 1. Locate the data_one and data_two
let locate_data_one = details.problems[0].data_one
let locate_data_two = details.problems[0].data_two


// 2. Merge the data_one and data_two to form a single list
let merge_data_one_two = locate_data_one.concat(locate_data_two)
console.log(`The merged data_one and data_two is ${merge_data_one_two}\n\n`)

// 3. Raise the RBC value to the power of the min value in the merge_data_one_two variable
let Locate_RBC_value = details.problems[0].Diabetes[0].labs[0].RBC
min_num = Math.min(...merge_data_one_two)

raised_val = Math.pow(Locate_RBC_value, min_num)
console.log(`The RBC value ${Locate_RBC_value} raised to the power of the min value ${min_num} in the merge_data_one_two variable is ${raised_val}\n\n`)


// 4. Locate the strength of Cardiotan and Telmisartan
let locate_strength_cardiotan = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug_2[0].strength
let locate_strength_telmisartan = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className_2[0].associatedDrug_2[0].strength
console.log(`Strength of Cardiotan is ${locate_strength_cardiotan} and the strength of Telmisartan is ${locate_strength_telmisartan}\n\n`)



// 5. Merge className and ClassName_2 to form a single list
let locate_className = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className
let locate_className_2 = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className_2
let merged_className_1_2 = locate_className.concat(locate_className_2)
console.log("The first list at index 0 in the merged list is:")
console.log(merged_className_1_2[0])
console.log("The second list at index 1 in the merged list is: ")
console.log(merged_className_1_2[1])


// 6. Replace the name of amlodiphine to amlo-di-pine from the JSON model
let locate_amlodipine = details.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className_2[0].associatedDrug[0].name
let replaced_value = locate_amlodipine.replace("amlodipine", "amlo-di-pine")
console.log("\n\n" +locate_amlodipine+ " has being replaced with " +replaced_value +"\n\n")


// 7. Create a function that checks if the WBC value is within the range of 35 and 50
let locate_WBC = details.problems[0].Diabetes[0].labs[0].WBC
let is_value_within = (value) => {
    if(value >= 35 && value <= 50){
        return true
    }
    return false
}
console.log("Is the WBC value within the range of 35 and 50? " +is_value_within(locate_WBC) + "\n\n")

// 8. Create a function that finds the average of the WBC and RBC value as parameters
locate_RBC = details.problems[0].Diabetes[0].labs[0].RBC
let average = (value1, value2) => value1 + value2 / 2
console.log("The average between WBC and RBC is " +average(locate_WBC, locate_RBC) + "\n\n")


// 9. Add a date key to all the associatedDrug
let date = new Date()

let locate_className_assoc_drug = merged_className_1_2[0].associatedDrug[0]
locate_className_assoc_drug.date = new Date(date.setFullYear(2022,3,6))
console.log(locate_className_assoc_drug)
console.log("\n\n")

let locate_className_assoc_drug_2 = merged_className_1_2[0].associatedDrug_2[0]
locate_className_assoc_drug_2.date = new Date(date.setFullYear(2023,2,9))
console.log(locate_className_assoc_drug_2)
console.log("\n\n")


let locate_className_2_assoc_drug = merged_className_1_2[1].associatedDrug[0]
locate_className_2_assoc_drug.date = new Date(date.setFullYear(2024,2,9))
console.log(locate_className_2_assoc_drug)
console.log("\n\n")


let locate_className_2_assoc_drug_2 = merged_className_1_2[1].associatedDrug_2[0]
locate_className_2_assoc_drug_2.date = new Date(date.setFullYear(2021,11,9))
console.log(locate_className_2_assoc_drug_2)
console.log("\n\n")