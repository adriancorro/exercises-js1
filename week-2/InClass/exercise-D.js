let parametro ;

function numberChecker(parametro) {
    if (parametro === "happy") {
    return `Good job, you're doing great!`;
    } else if (parametro === "sad") {
    return `Every cloud has a silver lining`;
    } else if (parametro >= 0 ) {
    return `Beep beep boop`;
    } else {
    return "I'm sorry, I'm still learning about feelings!";
    }
    }

    
    console.log(numberChecker(22));