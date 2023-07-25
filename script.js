
const color = ["#4A772F" , "#61ba49" ,"#337aad" ,"#b2a533" ,"#c227b7"];
const text = ["Onn alumba paathavan"," Ungoppan whistle-ah kettavan","Onn mavanum peranum " ,"Aattam poda veppavan","Ivan pera thookka naalu peru","Pattatha parikka nooru peru", "Kutti chevuttha etti paatha","Usura kodukka kodi peru"];

const title = document.querySelector(".text");
const bg = document.querySelector(".back");
let i =0;
setInterval(()=>{
switch(i)
{
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        {
        title.innerHTML = text[i];
        bg.setAttribute("style", `background: ${color[i]}; opacity:0.8;`);
        i++;
        break;
        }
        default:
            {
                i=0;
            }
}
},800);


