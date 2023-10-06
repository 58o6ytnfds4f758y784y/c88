var canvas = new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object ="";
var block_image_object ="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });

    window.addEventListener("keydown", mykeydown);
    function mykeydown(e){
        keypresed=e.keyCode;
        console.log(keypresed);
        if((e.shiftkey==true)&&(keypresed=='80')){
            console.log("shift + p");
            block_image_width = block_image_width + 10;
            block_image_height = block_image_height + 10;
            document.getElementById("current-width").innerHTML = block_image_width;
            document.getElementById("current-height").innerHTML = block_image_height;
        }
        if((e.shiftkey==true)&&(keypresed=='77')){
            console.log("shift + m");
            block_image_width = block_image_width - 10;
            block_image_height = block_image_height - 10;
            document.getElementById("current-width").innerHTML = block_image_width;
            document.getElementById("current-height").innerHTML = block_image_height;
        }
        if(keypresed=='37'){
            left();
            console.log("izquierda");
        }
        if(keypresed=='38'){
            up();
            console.log("arriba");
        }
        if(keypresed=='39'){
            right();
            console.log("derecha");
        }
        if(keypresed=='40'){
            down();
            console.log("abajo");
        }
        if(keypresed=='81'){
            console.log("q");
            new_image('glow.png');
        }
        if(keypresed=='87'){
            console.log("w");
            new_image('log.jpg');
        }
    }
    if(keypresed=='69'){
        console.log("e");
        new_image('pasto.png');
    }
}
if(keypresed=='82'){
    console.log("r");
    new_image('pasto2.png');
}
}
if(keypresed=='84'){
    console.log("t");
    new_image('piedra.jpg');
}
}
if(keypresed=='89'){
    console.log("y");
    new_image('player.png');
}
}
if(keypresed=='85'){
    console.log("u");
    new_image('rocaroja.jpg');
}
}
if(keypresed=='73'){
    console.log("i");
    new_image('tierra.png');
}
}
if(keypresed=='79'){
    console.log("o");
    new_image('wall.jpg');
}
}
if(keypresed=='76'){
    console.log("l");
    new_image('yellow_wall.png');
}
    }