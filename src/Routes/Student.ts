interface student {
   stdId:number,
   stdName:string
}

function greet(student:student){
    console.log(student.stdName);
}