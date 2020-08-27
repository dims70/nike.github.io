let cards = document.querySelectorAll('.nikes-flex>div');
cards.forEach((card,i)=>{
    card.onmouseenter = ()=>{
            card.children[0].style.display="none";
            card.children[1].innerHTML=
            "<div class='item-subtitle active'>"+
            "<span>Nike Airmax 2090</span>"+
            "<p>Shown:White/Pure Platinum<br>Bright Crimson/Black</p>"+
            "<p>Style: СТ7698-100</p>"
            "</div>";
            document.querySelectorAll('.pagins li')[i].classList="active";
        };
    card.onmouseleave = ()=>{
            card.children[0].style.display="block";
            card.children[1].innerHTML=
            "<div class='item-subtitle'>"+
            "<span>Nike Airmax 2090</span>"+
            "</div>";
            document.querySelectorAll('.pagins li')[i].classList="";
        };
});
