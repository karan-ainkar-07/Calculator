let btn_container = document.querySelector('#btn-container');
let display_content="";
let shift=false;
btn_container.addEventListener('click',(e)=>
{
    let btn_class=e.target.classList;
    if(!btn_class.contains('btn-img'))
    {
        if(e.target.tagName==="BUTTON")
            check_content(e.target.innerText)
    }
    else
    {
        operator(e.target);
    }
})
let content=document.querySelector('#content');
function check_content(Str)
{
    switch(Str)
    {
        case 'AC' : clear_all();
            break;
        case 'Del' : Backspace();
            break;
        case 'Shift' : Shift_Up();
            break;
        case '=' : Submit();
            break;
        default: concat_string(Str);
    }

}
function clear_all()
{
    display_content=""
    content.innerText=display_content;
}
function Backspace()
{
    display_content=display_content.slice(0,-1);
    content.innerText=display_content;
}
function Shift_Up()
{
    shift=!shift;
}
function Submit()
{
    let answer=eval(display_content);
    display_content=answer;
    content.innerHTML=display_content
}
function concat_string(Str)
{
    display_content+=Str;
    content.innerText=display_content;
}
function operator(element)
{
    if(shift)
    {
        display_content+=element.children[0].innerText;
        shift=!shift;
    }
    else
    {
        display_content+=element.children[1].innerText;
    }
    content.innerText=display_content;
}