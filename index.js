function saturdayFun(activity=`roller-skate`){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(something=`go to the office`) {
    return `This Monday, I will ${something}.`
}
function wrapAdjective(parameter1=`*`){
    return (function(parameter2=`special`){
            return `You are ${parameter1}${parameter2}${parameter1}!`
    })
}