setInterval(()=>
{
d=new Date();
htime=d.getHours()
hm=d.getMinutes()
hs=d.getSeconds()
hro=30*htime+hm/2;
mr=6*hm;
sr=6*hs;
hours.style.transform=`rotate(${hro}deg)`;
minuts.style.transform=`rotate(${mr}deg)`;
second.style.transform=`rotate(${sr}deg)`;
},1000);