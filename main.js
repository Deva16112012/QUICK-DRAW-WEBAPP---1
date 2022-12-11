array_1=[Fish,Cloud,book,bottle]
random_no = Math.floor((Math.random()*array_1.length)+1);
Element_of_array = array_1[random_no];
timer_counter=0;
timer_check="";
drawn_skecth="";
answer_holder="";
score=0;
function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}