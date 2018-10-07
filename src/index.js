module.exports = function count(s, pairs) {
    
    let N = 1;
    let k = 0;
	let res=0;

	for(pair of pairs)
	{
        N*=Math.pow(pair[0],pair[1]);
	}
	
	if( N > 10) return 0;
	
	while(k < N)
	{
        let found = true;
		for(let j = 0;j<s.length;++j)
		{
			let kjSum = k+j;
			if	(	
					(getNOD(kjSum,N) === 1 && s[j]==='1') || 
					(getNOD(kjSum,N)!==1 && s[j]==='0')
				)
			{
                continue;
            }
			else
			{
                found = false;
                break;
            }
        }
        if( found ) res++;
        k++;
    }
    return res;
}
function getNOD(a,b)
{
	while(b)
	{
		let c = a % b;
		a = b;
		b = c;
	}
	return a;
}