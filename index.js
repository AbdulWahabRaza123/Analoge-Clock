window.setInterval(Clock,1000);
function Clock()
{
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    Hour.style.transform=`rotate(${hrotation}deg)`;
    Minute.style.transform=`rotate(${mrotation}deg)`;
    Second.style.transform=`rotate(${srotation}deg)`;
    console.log(stime);
}