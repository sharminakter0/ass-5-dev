// ..................... number discreace function.....................

function taskAssinged(total){
    console.log (total)
const convertTotal = parseInt(total);
const cal = convertTotal - 1;
return cal;
}

// ..................... number Add function.....................

function pointAdd(total){
    console.log (total)
const convertTotal = parseInt(total);
const cal = convertTotal  + 1;
return cal;
}
// ......time function......

function time (){
    const now = new Date();

// Get hours, minutes, and seconds
let hours = now.getHours(); // 0-23
const minutes = now.getMinutes(); // 0-59
const seconds = now.getSeconds(); // 0-59
const amPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 2 || 12 ; // n.b
//  console.log ( hours)
//  console.log ( minutes)
//  console.log ( seconds)
    return  nowTime = `${ hours}:${minutes}:${seconds} ${amPm}`;
    //console.log (nowTime)
}

// date function.....

function date(){

    const now = new Date();
    const dayName = now.toLocaleString("en-US",{ weekday : "long"})
    const monthName = now.toLocaleString( "en-US",{month : "long"})
    
    const day = now.toLocaleString( "en-US",{day : 'numeric'})
    const year = now.toLocaleString( "en-US",{year : "numeric"})
    const banDate = `${dayName}, ${day} ${monthName} ${year}`;
    return banDate;

}
