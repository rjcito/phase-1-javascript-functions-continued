function saturdayFun(defaultActivity = "roller-skate"){
    return  `This Saturday, I want to ${defaultActivity}!`;
}

function mondayWork(dfltActivity = "go to the office"){
    return `This Monday, I will ${dfltActivity}.`;
}


function wrapAdjective(flair = "*"){
    return function innerFunction(parameter1 = "special"){
        return `You are ${flair}${parameter1}${flair}!`; 

    }
}