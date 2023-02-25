// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors


// Find all the topics and tasks which are thought in the month of October
// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
// Find all the company drives and students who are appeared for the placement.
// Find the number of problems solved by the user in codekata
// Find all the mentors with who has the mentee's count more than 15
// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

const zenclass = [ {   
    "id" : 01,
    "user" : "Sethupathy",
    "codekata" : 145,
    "attendance" : "Present",
    "topics" : "mongoDB",
    "topic_date" : new Date("<2020-10-18>"),
    "task submitted date" : new Date("<2020-10-20>"),
    "tasks" : "product-queries",
    "company_drives" : "paypal",
    "company_drives-date" : new Date("<2020-10-28>"),
    "placement" : "Appeared", 
    "mentors" :"ragav"
},
{   
    "id" : 02,
    "user" : "Vimal",
    "codekata" : 133,
    "attendance" : "Present",
    "topics" : "Mysql",
    "topic_date" : new Date("<2020-10-19>"),
    "task submitted date" : new Date("<2020-10-21>"),
    "tasks" : "SQL Bolt",
    "company_drives" : "wipro",
    "company_drives-date" : new Date("<2020-10-27>"),
    "placement" : "Appeared", 
    "mentors" : "ragav"
},

{   
    "id" : 03,
    "user" : "Robert",
    "codekata" : 188,
    "attendance" : "Present",
    "topics" : "React",
    "topic_date" : new Date("<2020-10-11>"),
    "task submitted date" : new Date("<2020-10-13>"),
    "tasks" : "Card",
    "company_drives" : "cognizant",
    "company_drives-date" : new Date("<2020-10-20>"),
    "placement" : "Appeared", 
    "mentors" : "ragav"
},
{   
    "id" : 04,
    "user" : "sathish",
    "codekata" : 142,
    "attendance" : "Present",
    "topics" : "React",
    "topic_date" : new Date("<2020-10-11>"),
    "task submitted date" : new Date("<2020-10-13>"),
    "tasks" : "Card",
    "company_drives" : "Tcs",
    "company_drives-date" : new Date("<2020-10-20>"),
    "placement" : "Appeared", 
    "mentors" : "ragav"
},
{   
    "id" : 05,
    "user" : "karthi",
    "codekata" : 165,
    "attendance" : "Present",
    "topics" : "Javascript",
    "topic_date" : new Date("<2020-10-01>"),
    "task submitted date" : new Date("<2020-10-03>"),
    "tasks" : "Restcountries using Fetch API",
    "company_drives" : "Infosys",
    "company_drives-date" : new Date("<2020-10-10>"),
    "placement" : "Appeared", 
    "mentors" : "saimohan"
},
{   
    "id" : 06,
    "user" : "Praveen",
    "codekata" : 162,
    "attendance" : "Present",
    "topics" : "Css",
    "topic_date" : new Date("<2020-10-15>"),
    "task submitted date" : new Date("<2020-10-17>"),
    "tasks" : "Form submission",
    "company_drives" : "Freshworks",
    "company_drives-date" : new Date("<2020-10-22>"),
    "placement" : "Appeared", 
    "mentors" : "saimohan"
},
{   
    "id" : 07,
    "user" : "Ayesha",
    "codekata" : 156,
    "attendance" : "Present",
    "topics" : "Html",
    "topic_date" : new Date("<2020-10-10>"),
    "task submitted date" : new Date("<2020-10-12>"),
    "tasks" : "Github clone",
    "company_drives" : "Ibm",
    "company_drives-date" : new Date("<2020-10-18>"),
    "placement" : "Appeared", 
    "mentors" : "saimohan"
},
{   
    "id" : 08,
    "user" : "Swathi",
    "codekata" : 128,
    "attendance" : "Present",
    "topics" : "NodeJs",
    "topic_date" : new Date("<2020-10-24>"),
    "task submitted date" : new Date("<2020-10-26>"),
    "tasks" : "Card",
    "company_drives" : "Tech mahindra",
    "company_drives-date" : new Date("<2020-10-29>"),
    "placement" : "Appeared", 
    "mentors" : "ragav"
},
{   
    "id" : 09,
    "user" : "Priyanka",
    "codekata" : 101,
    "attendance" : "Present",
    "topics" : "MongoDB",
    "topic_date" : new Date("<2020-10-18>"),
    "task submitted date" : new Date("<2020-10-20>"),
    "tasks" : "product-queries",
    "company_drives" : "Hcl",
    "company_drives-date" : new Date("<2020-10-28>"),
    "placement" : "Appeared", 
    "mentors" : "ragav"
},
{   
    "id" : 10,
    "user" : "saravanan",
    "codekata" : 094,
    "attendance" : "Present",
    "topics" : "Mysql",
    "topic_date" : new Date("<2020-10-19>"),
    "task submitted date" : new Date("<2020-10-21>"),
    "tasks" : "SQL Bolt",
    "company_drives" : "Zoho",
    "company_drives-date" : new Date("<2020-10-27>"),
    "placement" : "Appeared", 
    "mentors" : "ragav"
},

{   
    "id" : 11,
    "user" : "keerthana",
    "codekata" : 123,
    "attendance" : "Present",
    "topics" : "React",
    "topic_date" : new Date("<2020-10-13>"),
    "task submitted date" : new Date("<2020-10-15>"),
    "tasks" : "Card",
    "company_drives" : "Hp",
    "company_drives-date" : new Date("<2020-10-20>"),
    "placement" : "Appeared", 
    "mentors" : "ragav"
},

{   
    "id" : 12,
    "user" : "mani",
    "codekata" : 086,
    "attendance" : "Present",
    "topics" : "Javascript",
    "topic_date" : new Date("<2020-10-01>"),
    "task submitted date" : new Date("<2020-10-03>"),
    "tasks" : "Restcountries using Fetch API",
    "company_drives" : "Amazon",
    "company_drives-date" : new Date("<2020-10-10>"),
    "placement" : "Appeared", 
    "mentors" : "saimohan"
},

{   
    "id" : 13,
    "user" : "rajkumar",
    "codekata" : 156,
    "attendance" : "Present",
    "topics" : "Css",
    "topic_date" : new Date("<2020-10-15>"),
    "task submitted date" : new Date("<2020-10-17>"),
    "tasks" : "Form submission",
    "company_drives" : "wipro",
    "company_drives-date" : new Date("<2020-10-22>"),
    "placement" : "Appeared", 
    "mentors" : "saimohan"
},

{   
    "id" : 14,
    "user" : "ganesh",
    "codekata" : 112,
    "attendance" : "Present",
    "topics" : "Html",
    "topic_date" : new Date("<2020-10-10>"),
    "task submitted date" : new Date("<2020-10-11>"),
    "tasks" : "Github clone",
    "company_drives" : "Infosys",
    "company_drives-date" : new Date("<2020-10-18>"),
    "placement" : "Appeared", 
    "mentors" : "saimohan"
},

{   
    "id" : 15,
    "user" : "senthil",
    "codekata" : 092,
    "attendance" : "Present",
    "topics" : "NodeJs",
    "topic_date" : new Date("<2020-10-24>"),
    "task submitted date" : new Date("<2020-10-26>"),
    "tasks" : "Github clone",
    "company_drives" : "Tcs",
    "company_drives-date" : new Date("<2020-10-29>"),
    "placement" : "Appeared", 
    "mentors" : "ragav"
},

{   
    "id" : 16,
    "user" : "santhosh",
    "codekata" : 088,
    "attendance" : "Present",
    "topics" : "MongoDB",
    "topic_date" : new Date("<2020-10-18>"),
    "task submitted date" : new Date("<2020-10-20>"),
    "tasks" : "product-queries",
    "company_drives" : "Cts",
    "company_drives-date" : new Date("<2020-10-28>"),
    "placement" : "Not-Appeared", 
    "mentors" : "ragav"
},

{   
    "id" : 17,
    "user" : "ashok",
    "codekata" : 098,
    "attendance" : "Present",
    "topics" : "Mysql",
    "topic_date" : new Date("<2020-10-19>"),
    "task submitted date" : new Date("<2020-10-21>"),
    "tasks" : "SQL Bolt",
    "company_drives" : "wipro",
    "company_drives-date" : new Date("<2020-10-27>"),
    "placement" : "Not-Appeared", 
    "mentors" : "ragav"
},

{   
    "id" : 18,
    "user" : "chandru",
    "codekata" : 111,
    "attendance" : "Present",
    "topics" : "React",
    "topic_date" : new Date("<2020-09-1>"),
    "task submitted date" : new Date("<2020-10-11>"),
    "tasks" : "Card",
    "company_drives" : "Zoho",
    "company_drives-date" : new Date("<2020-10-20>"),
    "placement" : "Appeared", 
    "mentors" : "ragav"
},

{   
    "id" : 19,
    "user" : "vignesh",
    "codekata" : 125,
    "attendance" : "Present",
    "topics" : "Html",
    "topic_date" : new Date("<2020-10-10>"),
    "task_submitted_date" : new Date("<2020-10-11>"),
    "tasks" : "Github clone",
    "company_drives" : "Freshworks",
    "company_drives-date" : new Date("<2020-10-18>"),
    "placement" : "Not-Appeared", 
    "mentors" : "saimohan"
}
];

//1. Find all the topics and tasks which are thought in the month of October
db.zenclass.find({$or: [{topic_date: {$gte : new Date("<2020-10-01>"), $lte: new Date("<2020-10-31>")}},{task_submitted_date: {$gte : new Date("<2020-10-01>"), $lte: new Date("<2020-10-31>")}}]},{topics: 1, tasks: 1})

//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zenclass.find({company_drives_date: {$gte : new Date("<2020-10-15>"), $lte: new Date("<2020-10-31>")}},{company_drives: 1});

//3. Find all the company drives and students who are appeared for the placement.
db.zenclass.find({placement: {$eq: "Appeared"}}, {_id: 0, user: 1, company_drives: 1})

//4. Find the number of problems solved by the user in codekata
db.zenclass.find({}, {_id: 0, user: 1, codekata: 1})

//5. Find all the mentors with who has the mentee's count more than 15
db.zenclass.aggregate([
    {$group: {_id: "$mentors", count: {$sum: 1}}},
    {$match: {_id: {$ne: null}, count: {$gt: 4}}}
]);
db.zenclass.find({mentors: "Magesh"},{_id: 0, user: 1, mentors: 1});

//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zenclass.find({$or: [{attendance: "Absent"}, {task_submitted_date: {$not: {$gte: new Date("<2020-10-15>"), $lte: new Date("<2020-10-31>")}}}]})












