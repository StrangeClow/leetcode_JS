const difference = (a,b) => {
    const s = new Set(b);
    return a.filter( x => !s.has(x))
}


// input ([1,2,3,4],[1,2,3])   output==>[4]