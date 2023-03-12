
function destructivelyAppendCat(name)
 { return cats.push(name);
}


function destructivelyPrependCat(name)
 { return cats.unshift(name);
}


function destructivelyRemoveLastCat(name)
 { return cats.pop(name);
 }

 
 
function destructivelyRemoveFirstCat(name)
 { return cats.shift(name);
 }

 
function appendCat(name){
    const newcats=[...cats];
    newcats.push(name);
return newcats;
}


function prependCat(name){
    const newcats=[...cats];
    newcats.unshift(name);
    return newcats;
}

function removeLastCat(name){
    const newcats=[...cats];
    newcats.splice(name)
    return newcats;
}

const cats=["Milo", "Otis", "Garfield"];
function removeFirstCat(name){
    const newcats=[...cats];
    newcats.slice(name)
    return newcats;
}