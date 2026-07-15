function findContentChildren(g, s) {

    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);

    let i = 0;
    let j = 0;

    while(i < g.length && j < s.length){

        if(s[j] >= g[i]){
            i++;
        }

        j++;
    }

    return i;
}

console.log(findContentChildren([1,2],[1,2,3]));