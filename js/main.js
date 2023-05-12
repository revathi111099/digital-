let timeWraper=document.getElementById("nig");
let am=document.getElementById("nig1");
let pm=document.getElementById("nig2");

let dateIn=document.getElementById("date");
var h=new Date();
dateIn.innerText=h.getDate();
let monthIn=document.getElementById("month");
var b=h.getMonth()+1;
monthIn.innerText=b;
let yearIn=document.getElementById("year");
var c=h.getFullYear();
yearIn.innerText=c;

function time(){
	let	a=new Date();
	let hoursIn=document.getElementById("hours");
	hoursIn.innerText=a.getHours();
	let e=a.getMinutes();
    let minutesIn=document.getElementById("minutes");
	minutesIn.innerText=":"+" "+e;
	let secondsIn=document.getElementById("seconds");
    let f=a.getSeconds();
	secondsIn.innerText=":"+" "+f;
	
	if(a.getHours()<=12){
		am.checked=true;
	}
	else if(a.getHours()>12){
		pm.checked=true;
	}
}

setInterval(time,1000);

let day1In=document.getElementById("day1");
let putIn=document.getElementById("get");
let put1In=document.getElementById("get1");
let put2In=document.getElementById("get2");
let put3In=document.getElementById("get3");
let put4In=document.getElementById("get4");
let put5In=document.getElementById("get5");
let put6In=document.getElementById("get6");


function fill(){
	let y=new Date();
	let x=y.getDay();
	switch(x){
		case 0:
		    putIn.checked=true;
			break;
		case 1:
		    put1In.checked=true;
			break;
		case 2:
		    put2In.checked=true;
			break;
		case 3:
		    put3In.checked=true;
			break;
        case 4:
		    put4In.checked=true;
			break;
        case 5:
		    put5In.checked=true;
			break;
        case 6:
		    put6In.checked=true;
			break;			
	}
	
}
fill();

