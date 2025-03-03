//UC1 Ability to Check Employee is present or Absent

const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;  //this will return either 0 or 1 i.e true or false
if(empCheck === IS_ABSENT){
    console.log("Employee is Absent!!");
    return;
}else{
    console.log("Employee is Present!!");
}