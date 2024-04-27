/**
 * This expense tracker application is a comprehensive tool designed to help users manage ther finances effectively.
 * It offers a range of features to track expenses, set budgets, and analyse spending patterns over time.
 * 
 */


let users = [
    {
        Id:1,
        Email:"king@gmail.com",
        Password:"12345",
        Accounts:[
            {
                Id:1
            },
            {
                Id:2
            }
        ],
        Budgets:[
            {Id:1},
            {Id:2}
        ],
        RecurringTransactions:[
            {Id:1}
        ]

    }
]

let accounts = [
    {
        Id:1,
        UserId:1,
        Name:"Access Bank Account",
        Description:"Primary Account",
        Balance:"$25000",
        Transactions:[
            {Id:1}
        ]
    },
    {
        Id:2,
        UserId:1,
        Name:"First Bank Account",
        Description:"Secondary Account",
        Balance:"$5000",
        Transactions:[
            {Id:2}
        ]
    }
]

let transactions = [
    {
        Id:1,
        UserId:1,
        AccountId:1,
        CategoryId:1,
        Description:"Bought bag of garri at the market",
        Amount:"$200",
        Date: new Date()
    },
    {
        Id:2,
        UserId:1,
        AccountId:2,
        CategoryId:2,
        Description:"Paid Junior Fees",
        Amount:"$400",
        Date: new Date()
    }
]

let budgets = [
    {
        Id:1,
        UserId:1,
        CategoryId:1,
        Amount:"$700",
        StartDate: new Date(),
        EndDate: new Date()
    },
    {
        Id:2,
        UserId:1,
        CategoryId:3,
        Amount:"$800",
        StartDate: new Date(),
        EndDate: new Date()
    }
]

let categories = [
    {
        Id:1,
        Name:"Food",
        Description:"Expenses related to food Shopping",
        Transactions:[
            {Id:1}
        ]
    },
    {
        Id:2,
        Name:"Children",
        Description:"Expenses related to Kids expenses",
        Transactions:[
            {Id:2}
        ]
    },
    {
        Id:3,
        Name:"Wife",
        Description:"Expenses related to Wife expenses",
        Transactions:[]
    }
]

let recurringTransactions = [
    {
        Id:1,
        UserId:1,
        AccountId:1,
        CategoryId:3,
        Amount:"$400",
        Frequency:"Monthly",
        StartDate: new Date(),
        EndDate: null, // Ongoing
        Description:"Expenses for monthly hair do"
    },
]