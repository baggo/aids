var aids=(s,o)=>s.split('').map(x=>/[\S]/.test(x)&&(o=!o)?x.toUpperCase():x.toLowerCase()).join('')
module.exports=aids
