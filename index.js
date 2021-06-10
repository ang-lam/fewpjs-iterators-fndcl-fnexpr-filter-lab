// Code your solution here
function findMatching(arr, string) {
    return arr.filter( driver => 
        driver.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(arr, string) {
    return arr.filter( driver =>
        driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(arr, string) {
    return arr.filter( driver => driver.name === string)
}