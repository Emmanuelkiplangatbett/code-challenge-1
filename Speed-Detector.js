// program to detect speed
function correctSpeed(speed){
let points = (speed-70)/5
speed=parseInt(speed);
    if (speed>=0 && speed<=70){
        console.log["Ok"];
    }else if(speed>70 && points<=12){
        let extra=(speed-70)/5;
        console.log(extra);
    }else if(speed>70 && points>12){
        console.log("license suspended");
    }
}
correctSpeed(80);
