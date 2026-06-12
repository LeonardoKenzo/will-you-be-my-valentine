"use client";
import { useState , useEffect} from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => setNoCount(noCount + 1);

  useEffect(() => {
  const shapes = ['♥', '❤', '💗', '💖', '💕'];
  const colors = ['#e05080', '#c0336a', '#f472b6', '#fb7185', '#f9a8d4'];

  const spawn = () => {
    const el = document.createElement('span');
    el.className = 'floating-heart';
    const dur = 2.5 + Math.random() * 2.5;
    el.style.left = Math.random() * 95 + '%';
    el.style.bottom = '-20px';
    el.style.fontSize = 0.9 + Math.random() * 1.3 + 'rem';
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = dur + 's';
    el.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    document.body.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 300);
  };

  const interval = setInterval(spawn, 400);
  return () => clearInterval(interval);}, []);

  const getNoButtonText = () => {
    const phrases = [
      "Não",
      "Tem certeza?",
      "E se eu pedir com carinho?",
      "Por favorzinhoo",
      "Com chocolates de castanhas do pará?",
      "Que tal assistindo crepúsculo?",
      "POR FAVOR MEU BEM",
      "Mas :*(",
      "Eu vou exprudrar",
      "To mortinho",
      "Você está falando com o fantasma do Kenzo",
      "Por favor meu amorr",
      ":((((",
      "Te dou peônias infinitas",
      "Estoy muerto",
      "Dores infinitas :(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      {yesPressed ? (
        <>
          <img
            className="w-[min(280px,80vw)]"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="my-4 text-2xl sm:text-4xl font-bold text-center text-pink-600">
            <h1>
              UUOOOOUUUU!!! Eu te amo muito, meu amor!! 
              <br></br>
              Sou a pessoa mais sortuda por ter você em minha vidaaaa!!!💗
            </h1>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[160px] sm:h-[200px] rounded-full border-4 border-pink-400 ring-4 ring-pink-200 ring-offset-2 ring-offset-pink-100 p-1"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-2xl sm:text-4xl text-center px-2">
            Lais, Aceita ser minha namorada? Por favorzinho🥺
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="rounded-lg bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-700 transition-all"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded-lg bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-700 transition-all text-base"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}