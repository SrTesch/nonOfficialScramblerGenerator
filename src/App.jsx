import './App.css'
import { useEffect, useState } from 'react';
function App() {
  const [c1, setc1] = useState("#ffffff");


  function resetColors(){
    
    document.getElementById("c1").value = "#ffffff";
    document.getElementById("c2").value = "#ffff00"; 
    document.getElementById("c3").value = "#00ff00";
    document.getElementById("c4").value = "#ff0000"; 
    document.getElementById("c5").value = "#0000ff";
    document.getElementById("c6").value = "#9600c8";
    document.getElementById("c7").value = "#fa6496";
    document.getElementById("c8").value  = "#d2d2d2"; 
    document.getElementById("c9").value = "#00ffff";
    document.getElementById("c10").value = "#fffdd0";
    document.getElementById("c11").value = "#ff9600";
    document.getElementById("c12").value  = "#90ee90";
    changeColor();
  }

  useEffect(()=>{
    resetColors();
  },[])

  let cores = [
    branco = document.getElementById("c1").value,
    amarelo = document.getElementById("c2").value,
    verde = document.getElementById("c3").value,
    vermelho = document.getElementById("c4").value,
    azul = document.getElementById("c5").value,
    roxo = document.getElementById("c6").value,
    rosa = document.getElementById("c7").value,
    cinza = document.getElementById("c8").value,
    ciano = document.getElementById("c9").value,
    creme = document.getElementById("c10").value,
    laranja = document.getElementById("c11").value,
    verde2 = document.getElementById("c12").value
  ];

  let pecas = {
    p1: { c1: cores[0], c2: cores[1], c3: cores[5] },
    p2: { c1: cores[0], c2: cores[4], c3: cores[1] },
    p3: { c1: cores[0], c2: cores[3], c3: cores[4] },
    p4: { c1: cores[0], c2: cores[2], c3: cores[3] },
    p5: { c1: cores[0], c2: cores[5], c3: cores[2] },
    p6: { c1: cores[7], c2: cores[11], c3: cores[10] },
    p7: { c1: cores[7], c2: cores[10], c3: cores[8] },
    p8: { c1: cores[7], c2: cores[8], c3: cores[9] },
    p9: { c1: cores[7], c2: cores[9], c3: cores[6] },
    p10: { c1: cores[7], c2: cores[6], c3: cores[11] },
    p11: { c1: cores[4], c2: cores[6], c3: cores[3] },
    p12: { c1: cores[4], c2: cores[6], c3: cores[11] },
    p13: { c1: cores[1], c2: cores[11], c3: cores[4] },
    p14: { c1: cores[1], c2: cores[11], c3: cores[10] },
    p15: { c1: cores[5], c2: cores[10], c3: cores[1] },
    p16: { c1: cores[5], c2: cores[10], c3: cores[8] },
    p17: { c1: cores[8], c2: cores[2], c3: cores[5] },
    p18: { c1: cores[8], c2: cores[2], c3: cores[9] },
    p19: { c1: cores[3], c2: cores[9], c3: cores[2] },
    p20: { c1: cores[3], c2: cores[9], c3: cores[6] }
  };

  


  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.rotate(-36 * 3.1415726 / 180 );
    ctx.translate(-460,260);
    changeColor();
    reloadPieces();
  },[])


  function changeColor() {
    cores = [
           branco = document.getElementById("c1").value,
           amarelo = document.getElementById("c2").value, 
           verde = document.getElementById("c3").value, 
           vermelho = document.getElementById("c4").value, 
           azul = document.getElementById("c5").value, 
           roxo = document.getElementById("c6").value, 
           rosa = document.getElementById("c7").value, 
           cinza  = document.getElementById("c8").value, 
           ciano = document.getElementById("c9").value, 
           creme = document.getElementById("c10").value, 
           laranja = document.getElementById("c11").value, 
           verde2  = document.getElementById("c12").value
           ];
    solve();
    reloadPieces();
  }
  
  

  function solve(){
    pecas = {
           p1: {c1:cores[0], c2:cores[1] , c3:cores[5] },
           p2: {c1:cores[0], c2:cores[4] , c3:cores[1] },
           p3: {c1:cores[0], c2:cores[3] , c3:cores[4] },
           p4: {c1:cores[0], c2:cores[2] , c3:cores[3] },
           p5: {c1:cores[0], c2:cores[5] , c3:cores[2] },
           p6: {c1:cores[7], c2:cores[11], c3:cores[10]},
           p7: {c1:cores[7], c2:cores[10], c3:cores[8] },
           p8: {c1:cores[7], c2:cores[8] , c3:cores[9] },
           p9: {c1:cores[7], c2:cores[9] , c3:cores[6] },
           p10:{c1:cores[7], c2:cores[6] , c3:cores[11]},
           p11:{c1:cores[4], c2:cores[6] , c3:cores[3] },
           p12:{c1:cores[4], c2:cores[6] , c3:cores[11]},
           p13:{c1:cores[1], c2:cores[11], c3:cores[4] },
           p14:{c1:cores[1], c2:cores[11], c3:cores[10]},
           p15:{c1:cores[5], c2:cores[10], c3:cores[1] },
           p16:{c1:cores[5], c2:cores[10], c3:cores[8] },
           p17:{c1:cores[8], c2:cores[2] , c3:cores[5] },
           p18:{c1:cores[8], c2:cores[2] , c3:cores[9] },
           p19:{c1:cores[3], c2:cores[9] , c3:cores[2] },
           p20:{c1:cores[3], c2:cores[9] , c3:cores[6] }
         };
  }
  function draw(color, p1, p2, p3, p4){
    ctx.fillStyle = color;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(p1[0], p1[1]); 
    ctx.lineTo(p2[0], p2[1]); 
    ctx.lineTo(p3[0], p3[1]); 
    ctx.lineTo(p4[0], p4[1]); 
    ctx.lineTo(p1[0], p1[1]);
    ctx.fill();
    ctx.stroke();
  }

  function drawDraft(color,p1,p2,p3,p4,p5){
    ctx.fillStyle = color;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(p1[0], p1[1]); 
    ctx.lineTo(p2[0], p2[1]); 
    ctx.lineTo(p3[0], p3[1]); 
    ctx.lineTo(p4[0], p4[1]); 
    ctx.lineTo(p5[0], p5[1]);
    ctx.lineTo(p1[0], p1[1]); 
    ctx.fill();
    ctx.stroke();
  }

  function uMove(direction){
    if(direction == 1 || direction ==   2){
      aux = pecas.p5;
      pecas.p5 = pecas.p4;
      pecas.p4 = pecas.p3;
      pecas.p3 = pecas.p2;
      pecas.p2 = pecas.p1;
      pecas.p1 = aux;
    }
    if(direction== -1 || direction == -2){
      aux = pecas.p1;
      pecas.p1 = pecas.p2;
      pecas.p2 = pecas.p3;
      pecas.p3 = pecas.p4;
      pecas.p4 = pecas.p5;
      pecas.p5 = aux;
    }
    if(direction == 2 || direction == -2){
      reloadPieces();
    }
  }

  function flip(piece, direction){
    if(direction == 1){
      aux = piece.c1;
      piece.c1 = piece.c2;
      piece.c2 = piece.c3;
      piece.c3 = aux;
    }
    if(direction == -1){
      aux = piece.c3;
      piece.c3 = piece.c2;
      piece.c2 = piece.c1;
      piece.c1 = aux;
    }
  }

  function rMove(direction){
    if(direction == 1 || direction == 2){
      aux = pecas.p7;
      pecas.p7 = pecas.p14;
      pecas.p14 = pecas.p2;
      pecas.p2 = pecas.p4;
      pecas.p4 = pecas.p18;
      pecas.p18 = aux;
      
      aux = pecas.p3;
      pecas.p3 = pecas.p19;
      pecas.p19 = pecas.p8;
      pecas.p8 = pecas.p6;
      pecas.p6 = pecas.p13;
      pecas.p13 = aux;

      aux = pecas.p20;
      pecas.p20 = pecas.p9;
      pecas.p9 = pecas.p10;
      pecas.p10 = pecas.p12;
      pecas.p12 = pecas.p11;
      pecas.p11 = aux;

      
      flip(pecas.p4,1);
      flip(pecas.p3,-1);
      flip(pecas.p2,1);
      flip(pecas.p9,-1);
      flip(pecas.p11,1);
      flip(pecas.p6,1);
      flip(pecas.p7,1);
      flip(pecas.p8,1);
      flip(pecas.p19,-1);
      flip(pecas.p20,-1);
      flip(pecas.p18,1);
      flip(pecas.p13,1);
      
      aux = pecas.p3.c2;
      pecas.p3.c2 = pecas.p3.c3;
      pecas.p3.c3 = aux;

      aux = pecas.p4.c2;
      pecas.p4.c2 = pecas.p4.c3;
      pecas.p4.c3 = aux;

      aux = pecas.p12.c1;
      pecas.p12.c1 = pecas.p12.c3;
      pecas.p12.c3 = aux;

      aux = pecas.p11.c1;
      pecas.p11.c1 = pecas.p11.c3;
      pecas.p11.c3 = aux;

      aux = pecas.p20.c1;
      pecas.p20.c1 = pecas.p20.c3;
      pecas.p20.c3 = aux;

      aux = pecas.p13.c1;
      pecas.p13.c1 = pecas.p13.c3;
      pecas.p13.c3 = aux;

      aux = pecas.p10.c1;
      pecas.p10.c1 = pecas.p10.c3;
      pecas.p10.c3 = aux;

      aux = pecas.p7.c2;
      pecas.p7.c2 = pecas.p7.c3;
      pecas.p7.c3 = aux;
    }
    if(direction == -1 || direction == -2){
      rMove(1);
      rMove(1);
      rMove(1);
      rMove(1);
    }
    if(direction == 2 || direction == -2){
      if(direction == 2){
        rMove(1);
      }else if(direction == -2){
        rMove(-1);
      }
      reloadPieces();
    }
  }

  function dMove(direction){
    if(direction == 1 || direction == 2){
      aux = pecas.p6;
      pecas.p6 = pecas.p10;
      pecas.p10 = pecas.p9;
      pecas.p9 = pecas.p8;
      pecas.p8 = pecas.p7;
      pecas.p7 = aux;
      
      aux = pecas.p11;
      pecas.p11 = pecas.p19;
      pecas.p19 = pecas.p17;
      pecas.p17 = pecas.p15;
      pecas.p15 = pecas.p13;
      pecas.p13 = aux;

      aux = pecas.p12;
      pecas.p12 = pecas.p20;
      pecas.p20 = pecas.p18;
      pecas.p18 = pecas.p16;
      pecas.p16 = pecas.p14;
      pecas.p14 = aux;

      flip(pecas.p19, -1);

      aux = pecas.p19.c1;
      pecas.p19.c1 = pecas.p19.c3;
      pecas.p19.c3 = aux;

      flip(pecas.p20, -1);

      aux = pecas.p20.c1;
      pecas.p20.c1 = pecas.p20.c3;
      pecas.p20.c3 = aux;

      aux = pecas.p18.c1;
      pecas.p18.c1 = pecas.p18.c2;
      pecas.p18.c2 = aux;

      aux = pecas.p17.c1;
      pecas.p17.c1 = pecas.p17.c2;
      pecas.p17.c2 = aux;

    }
    if(direction == -1 || direction == -2){
      dMove(1);
      dMove(1);
      dMove(1);
      dMove(1);
    }
    if(direction == 2 || direction == -2){
      if(direction == 2){
        dMove(1);
      }else{
        if(direction == -2){
          dMove(-1);
        }
      }
      reloadPieces();
    }
  }

  function reloadPieces(){
    // Peça 1
    draw(pecas.p1.c1 ,[300, 200],[285, 248],[350, 269],[350, 200]);
    draw(pecas.p1.c2 ,[300, 200],[285, 153],[350, 131],[350, 200]);
    draw(pecas.p1.c3 ,[300, 200],[260, 171],[219, 226],[285, 248]);

    // Peça 2
    draw(pecas.p2.c1 ,[400, 200],[350, 200],[350, 269],[416, 248]);
    draw(pecas.p2.c2 ,[400, 200],[441, 171],[481, 226],[416, 248]);
    draw(pecas.p2.c3 ,[400, 200],[350, 200],[350, 131],[416, 153]);

    // Peça 3
    draw(pecas.p3.c1 ,[431, 295],[416, 248],[350, 269],[391, 325]);
    draw(pecas.p3.c2 ,[431, 295],[472, 325],[431, 380],[391, 325]);
    draw(pecas.p3.c3 ,[431, 295],[416, 248],[481, 226],[481, 295]);
    

    // Peça 4
    draw(pecas.p4.c1 ,[350, 354],[391, 325],[350, 269],[310, 325]);
    draw(pecas.p4.c2 ,[350, 354],[310, 325],[269, 380],[335, 402]);
    draw(pecas.p4.c3 ,[350, 354],[391, 325],[431, 380],[366, 402]);

    // Peça 5
    draw(pecas.p5.c1 ,[269, 295],[310, 325],[350, 269],[285, 248]);
    draw(pecas.p5.c2 ,[269, 295],[285, 248],[219, 226],[219, 295]);
    draw(pecas.p5.c3 ,[269, 295],[229, 325],[269, 380],[310, 325]);

    // Peça 6
    draw(pecas.p6.c1 ,[743, 141],[784, 171],[743, 226],[703, 171]);
    draw(pecas.p6.c2 ,[743, 141],[703, 171],[662, 115],[728, 94] );
    draw(pecas.p6.c3 ,[743, 141],[784, 171],[824, 115],[759, 94] );

    // Peça 7
    draw(pecas.p7.c1 ,[824, 200],[809, 248],[743, 226],[784, 171]);
    draw(pecas.p7.c2 ,[824, 200],[865, 171],[824, 115],[784, 171]);
    draw(pecas.p7.c3 ,[824, 200],[809, 248],[874, 269],[874, 200]);

    // Peça 8
    draw(pecas.p8.c1 ,[793, 295],[743, 295],[743, 226],[809, 248]);
    draw(pecas.p8.c2 ,[793, 295],[834, 325],[874, 269],[809, 248]);
    draw(pecas.p8.c3 ,[793, 295],[743, 295],[743, 364],[809, 343]);

    // Peça 9
    draw(pecas.p9.c1 ,[693, 295],[678, 248],[743, 226],[743, 295]);
    draw(pecas.p9.c2 ,[693, 295],[678, 343],[743, 364],[743, 295]);
    draw(pecas.p9.c3 ,[693, 295],[678, 248],[612, 269],[653, 325]);

    // Peça 10
    draw(pecas.p10.c1 ,[662, 200],[703, 171],[743, 226],[678, 248]);
    draw(pecas.p10.c2 ,[662, 200],[612, 200],[612, 269],[678, 248]);
    draw(pecas.p10.c3 ,[662, 200],[622, 171],[662, 115],[703, 171]);

    // Peça 11
    draw(pecas.p11.c1 ,[531, 295],[481, 295],[481, 226],[547, 248]);
    draw(pecas.p11.c2 ,[531, 295],[572, 325],[612, 269],[547, 248]);
    draw(pecas.p11.c3 ,[512, 354],[497, 402],[431, 380],[472, 325]);

    // Peça 12
    draw(pecas.p12.c1 ,[562, 200],[547, 248],[481, 226],[522, 171]);
    draw(pecas.p12.c2 ,[562, 200],[547, 248],[612, 269],[612, 200]);
    draw(pecas.p12.c3 ,[581, 141],[597, 94] ,[662, 115],[622, 171]);

    // Peça 13
    draw(pecas.p13.c1 ,[431, 105],[416, 153],[350, 131],[391, 76]);
    draw(pecas.p13.c2 ,[612, 46] ,[662, 46] ,[662,115],[597, 94] );
    draw(pecas.p13.c3 ,[481, 141],[522, 171],[481, 226],[441, 171]);

    // Peça 14
    draw(pecas.p14.c1 ,[350, 46] ,[391, 76] ,[350, 131],[310, 76]);
    draw(pecas.p14.c2 ,[712, 46] ,[728, 94] ,[662,115],[662, 46] );
    draw(pecas.p14.c3 ,[774, 46] ,[759, 94] ,[824,115],[824, 46] );

    // Peça 15
    draw(pecas.p15.c1 ,[219, 141],[179, 171],[219, 226],[260, 171]);
    draw(pecas.p15.c2 ,[874, 46] ,[824, 46] ,[824, 115],[890, 94] );
    draw(pecas.p15.c3 ,[269, 105],[310, 76] ,[350, 131],[285, 153]);

    // Peça 16
    draw(pecas.p16.c1 ,[138, 200],[154, 248],[219, 226],[179, 171]);
    draw(pecas.p16.c2 ,[905, 141],[890, 94] ,[824, 115],[865, 171]);
    draw(pecas.p16.c3 ,[924, 200],[874, 200],[874, 269],[940, 248]);

    // Peça 17
    draw(pecas.p17.c1 ,[955, 295],[940, 248],[874, 269],[915, 324]);
    draw(pecas.p17.c2 ,[188, 354],[204, 402],[269, 380],[229, 325]);
    draw(pecas.p17.c3 ,[169, 295],[219, 295],[219, 226],[154, 248]);
    

    // Peça 18
    draw(pecas.p18.c1 ,[874, 354],[915, 324],[874, 269],[834, 325]);
    draw(pecas.p18.c2 ,[219, 449],[269, 449],[269, 380],[204, 402]);
    draw(pecas.p18.c3 ,[824, 390],[809, 343],[743, 364],[784, 420]);

    // Peça 19
    draw(pecas.p19.c1 ,[381, 449],[366, 402],[431, 380],[431, 449]);
    draw(pecas.p19.c2 ,[743, 449],[784, 420],[743, 364],[703, 420]);
    draw(pecas.p19.c3 ,[319, 449],[335, 402],[269, 380],[269, 449]);

    // Peça 20
    draw(pecas.p20.c1 ,[481, 449],[431, 449],[431, 380],[497, 402]);
    draw(pecas.p20.c2 ,[662, 390],[703, 420],[743, 364],[678, 343]);
    draw(pecas.p20.c3 ,[612, 354],[653, 325],[612, 269],[572, 325]);


  }

  function scramble(){
    moves = document.getElementById("scramble").value.split(" ");
    for (i = 0; i <  moves.length; i++) {
      if(moves[i] === "R--"){
        rMove(-1);
        rMove(-1);
      }else{
        if(moves[i] === "R++"){
          rMove(1);
          rMove(1);
        }else{
          if(moves[i] === "D--"){
            dMove(-1);
            dMove(-1);
          }else{
            if(moves[i] === "D++"){
              dMove(1);
              dMove(1);
            }else{
              if(moves[i] === "U"){
                uMove(1);
              }else{
                if(moves[i] === "U'"){
                  uMove(-1);
                }
              }
            }
          }
        }
      }
    }
    reloadPieces();
    console.log(moves.length);
    console.log(moves);
  }
  return (
    <div className='teste' style={{color : "white"}}>
  
      <canvas id="myCanvas" width="750" height="720" style={{border: "2px solid black",
                padding: "10px"}}>Your browser does not support the HTML5 canvas tag. </canvas>
      <textarea name="scramble" id="scramble" style={{height: "80px", width: "600px", resize: "none"}}></textarea> 
      <button onClick={scramble} style={{height: "40px",width: "80px"}}>Gerar</button>
      <fieldset className="fieldset-container" style={{width: "180px", height: "150px"}} >
        <legend>Moves</legend>
          <button style={{width: "80px",height: "30px"}} onClick={rMove(2)}>R++</button>
          <button style={{width: "80px",height: "30px"}}onClick={rMove(-2)}>R--</button>
          <br /><br />
          <button style={{width: "80px",height: "30px"}} onClick={dMove(2)}>D++</button>
          <button style={{width: "80px",height: "30px"}} onClick={dMove(-2)}>D--</button>
          <br /><br />
          <button style={{width: "80px",height: "30px"}}onClick={uMove(2)}> U  </button>
          <button style={{width: "80px",height: "30px"}}onClick={uMove(-2)}> U' </button>
      </fieldset>
    <fieldset className="fieldset-container" style={{width: "320px",height: "150px"}}>
      <legend>Colors</legend>
      <input type="color" id="c1" name="c1" value="#ffffff" />
      <input type="color" id="c2" name="c2" value="#ffff00" />
      <input type="color" id="c3" name="c3" value="#00ff00" />
      <button style={{width: "90px", height: "30px", marginLeft: "40px"}} onClick={changeColor}> change </button>
      <br /><br />
      <input type="color" id="c4" name="c4" value="#ff0000" />
      <input type="color" id="c5" name="c5" value="#0000ff" />
      <input type="color" id="c6" name="c6" value="#9600c8" />
      <button style={{width: "90px", height: "30px", marginLeft: "40px"}} onClick={resetColors}> reset </button>
      <br /><br />
      <input type="color" id="c7" name="c7" value="#fa6496" />
      <input type="color" id="c8" name="c8" value="#d2d2d2" />
      <input type="color" id="c9" name="c9" value="#00ffff" />
      <input type="color" id="c10" name="c10" value="#fffdd0" />
      <input type="color" id="c11" name="c11" value="#ff9600" />
      <input type="color" id="c12" name="c12" value="#90ee90" />
      
    </fieldset>
    </div>
  )
}

export default App
