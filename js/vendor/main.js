import gsap from 'gsap';
import { Howl } from 'howler';
let btn, frm, txt;
let sound, sound2, sound3, btn_play, btn_stop, btn_playb, btn_stopb, btn_playc, btn_stopc;

window.onload = () => {
  gsap = window.gsap;
  animacion(); 
  
  sound = new Howl({
    src: ['https://res.cloudinary.com/dzne08rlu/video/upload/v1692501639/good-night-160166_u6nelc.mp3']            
  });
  btn_play = document.getElementById("btn_play");
  btn_stop = document.getElementById("btn_stop");
  btn = document.getElementById("btn_enviar");
  btn.addEventListener("click", enviar);
  btn_play.addEventListener("click", reproducir);
  btn_stop.addEventListener("click", detener);

  sound2 = new Howl({
    src: ['https://res.cloudinary.com/dzne08rlu/video/upload/v1692501638/modern-vlog-140795_sarruw.mp3']            
  });
  btn_playb = document.getElementById("btn_playb");
  btn_stopb = document.getElementById("btn_stopb");
  btn_playb.addEventListener("click", reproducirB);
  btn_stopb.addEventListener("click", detenerB);

  sound3 = new Howl({
    src: ['https://res.cloudinary.com/dzne08rlu/video/upload/v1692501639/abstract-future-bass-162604_nc7a8u.mp3']            
  });
  btn_playc = document.getElementById("btn_playC");
  btn_stopc = document.getElementById("btn_stopC");
  btn_playc.addEventListener("click", reproducirC);
  btn_stopc.addEventListener("click", detenerC);
}

function animacion() {
  var tl= gsap.timeline({repeat:2,repeatDelay:1})
  tl.from("#banner",{opacity:0,duration:3});
  tl.from(".izquierda",{x:-100,duration:1,ease:"back.out(1.7)"});
  tl.from(".derecha",{x:"150%",duration:1,ease:"back.out(1.7)"});
  tl.from(".remedios", { x: -100, opacity: 0, duration: 1  });
  tl.play();
}

function reproducir(event){
  btn_play.classList.add("ocultar");
  btn_stop.classList.remove("ocultar");
  sound.play();
}

function detener(event){
  btn_play.classList.remove("ocultar");
  btn_stop.classList.add("ocultar");
  sound.pause();
}

function reproducirB(event){
  btn_playb.classList.add("ocultar");
  btn_stopb.classList.remove("ocultar");
  sound2.play();
}

function detenerB(event){
  btn_playb.classList.remove("ocultar");
  btn_stopb.classList.add("ocultar");
  sound2.pause();
}

function reproducirC(event){
  btn_playc.classList.add("ocultar");
  btn_stopc.classList.remove("ocultar");
  sound3.play();
}

function detenerC(event){
  btn_playc.classList.remove("ocultar");
  btn_stopc.classList.add("ocultar");
  sound3.pause();
}

function enviar(event) {
  frm = document.getElementById("formulario");
  if (frm.checkValidity()) {
    txt = document.getElementById("boletin");
    txt.value = "";  
    alert(
      "¡Gracias por registrarte, espera próximamente el boletín de Trazarte!"
    );
    event.preventDefault();
  }
}