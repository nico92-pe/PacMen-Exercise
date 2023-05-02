var pos = 0;
const pacArray = [
    ['images/pacman1.png', 'images/pacman2.png'],
    ['images/pacman3.png', 'images/pacman4.png']
];
var direction = 0;
var focus = 0;
var timer = 200;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
    setTimeout(Run, timer);
}

function checkPageBounds(direction, imgWidth) {
    //
    // Complete this to reverse direction on hitting page bounds
    //
    let img = document.getElementById("PacMan");
    const position = parseInt(img.style.left.replace('px',''));
    
    if ((direction == 0) && (position + imgWidth > 600)){
        return direction = 1;
    } else if ((direction == 1) && (position < 0)){
        return direction = 0;
    }
    return direction;
}