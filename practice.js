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

console.log(details.problems[0].Asthma)