var cont=document.createElement("div")
    cont.classList.add("container")
var row=document.createElement("row")
    row.classList.add("row")
var div=document.createElement("div")
    div.classList.add("divi")
var heading1=document.createElement("h1")
    heading1.classList.add("h1")
    heading1.innerHTML="RANDOM NUMBER GENERATOR"
div.append(heading1)
var but1=document.createElement("button")
    but1.classList.add("but1")
    but1.setAttribute("type","submit")
    but1.setAttribute("value","click to generate random number")
    but1.innerHTML="click to generate random number"
div.append(but1)
var gen=document.createElement("p")
    gen.classList.add("num")
    function generateNum (min, max) {
        var randNumber = Math.floor(Math.random()*(max - min + 1)) + min;
        if (randNumber == max) {
          randNumber += generateNum(min, max);
        }
        return randNumber;
      }

but1.onclick=function(){
    var temp=generateNum(10000000,90000000)
    gen.innerHTML="RANDOM NUMBER IS: "+ temp
}
div.append(gen)
var div1=document.createElement("div")
    div1.classList.add("divi1")
var heading2=document.createElement("h1")
    heading2.classList.add("h1")
    heading2.innerHTML="AGE CALCULATOR"
div1.append(heading2)
var but2=document.createElement("input")
    but2.classList.add("but2")
    but2.setAttribute("type","date")
    but2.setAttribute("id","but2")
div1.append(but2)
var br=document.createElement("br")
div1.append(br)
var br1=document.createElement("br")
div1.append(br1)
var but3=document.createElement("button")
    but3.classList.add("but3")
    but3.setAttribute("type","submit")
    but3.setAttribute("value","click to calculate age")
    but3.innerHTML="click to calculate age"
div1.append(but3)
var gen0=document.createElement("p")
    gen0.classList.add("num0")
var gen1=document.createElement("p")
    gen1.classList.add("num1")
var gen2=document.createElement("p")
    gen2.classList.add("num2")
var gen3=document.createElement("p")
    gen3.classList.add("num3")
var gen4=document.createElement("p")
    gen4.classList.add("num4")
var gen5=document.createElement("p")
    gen5.classList.add("num5")
var gen6=document.createElement("p")
    gen6.classList.add("num6")
var gen7=document.createElement("p")
    gen7.classList.add("num7")

but3.onclick=function(){
    var dateStart=document.getElementById("but2").value
    var dateStarting=new Date(dateStart);
    var dateend=new Date()
    var diff=dateend-dateStarting 
    var secondstillnow=Math.floor(diff/1000)
    var minutestillnow=Math.floor(secondstillnow/60)
    var hourstillnow=Math.floor(minutestillnow/60)
    var days1=dateend.getTime()
    var days2=dateStarting.getTime()
    var daysdiff=Math.floor(days1-days2);
    var dayscount=Math.ceil(daysdiff/(1000*3600*24))
    var years=Math.floor(diff/(365.25*24*60*60*1000));
    var remaining=Math.floor(diff%(365.25*24*60*60*1000));
    var months=Math.floor(remaining/((365.25/12)*24*60*60*1000));
    var remaining=Math.floor(remaining%((365.25/12)*24*60*60*1000));
    var days=Math.floor(remaining/(24*60*60*1000));
    var monthstillnow=Math.floor(minutestillnow/43800)
    if(isNaN(years)===true)
    {
        gen0.innerHTML="PLEASE SELECT THE DATE OF BIRTH"
        div1.append(gen0) 
    }
    else{
    gen0.innerHTML=""
    div1.append(gen0)
    gen1.innerHTML="Age is "+years+" years "+months+" months "+days+" days "
    div1.append(gen1)
    gen2.innerHTML="Milliseconds Since Birth: "+diff
    div1.append(gen2)
    gen3.innerHTML="Seconds Since Birth: "+secondstillnow
    div1.append(gen3)
    gen4.innerHTML="Minutes Since Birth: "+minutestillnow
    div1.append(gen4)
    gen5.innerHTML="Hours Since Birth: "+hourstillnow
    div1.append(gen5)
    gen6.innerHTML="Days Since Birth: "+dayscount
    div1.append(gen6)
    gen7.innerHTML="Months Since Birth: "+monthstillnow
    div1.append(gen7)}
}

div1.append(but3)

row.append(div,div1)
cont.append(row)
document.body.append(cont)
