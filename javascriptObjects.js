function printStudents(students){
    for(var i=0;i<students.length;i++){
        console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort);
    }
}

function printAllUsers(allUsers){
    for(users in allUsers){
        var counter=1;
        console.log(users.toUpperCase());
        for(var user in allUsers[users]){
            var first_name=allUsers[users][user]['first_name'].toUpperCase();
            var last_name=allUsers[users][user]['last_name'].toUpperCase()
            console.log(counter.toString() + " - " + last_name + ", " + first_name + " - " + (first_name.length + last_name.length).toString() );
            counter++;
        }
    }
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
printStudents(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};
printAllUsers(users);
