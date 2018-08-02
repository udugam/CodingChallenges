var validBrackets = function(string) {
    var stringArray = string.split("")
    var numOpen = 0
    debugger
    stringArray.forEach( function(element) {
        if(element===')' && numOpen<1) {
            console.log('false')
            return false
        }
        if(element===')' && numOpen>0) {
            numOpen--
        } 
        if(element==='(') {
            numOpen++
        }

    })
    console.log('true')
    return true;
}

validBrackets("()")
validBrackets(")(()))")
validBrackets("(())((()())())")
