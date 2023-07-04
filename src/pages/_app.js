import { useState } from "react";
import Link from "next/link";

const initialDinos = [
  {
    id: "1",
    name: "Tyrannosaurus Rex",
    height: 20,
    meatEater: true,
    color: "brown",
    yearOfExtinction: 65,
    liked: false,
  },
  {
    id: "2",
    name: "Stegosaurus",
    height: 9,
    meatEater: false,
    color: "green",
    yearOfExtinction: 150,
    liked: true,
  },
  {
    id: "3",
    name: "Velociraptor",
    height: 1.8,
    meatEater: true,
    color: "brown",
    yearOfExtinction: 71,
    liked: false,
  },
  {
    id: "4",
    name: "Brachiosaurus",
    height: 30,
    meatEater: false,
    color: "grey",
    yearOfExtinction: 155,
    liked: false,
  },
];

export default function App({ Component, pageProps }) {
  const [dinosaurs, setDinosaurs] = useState(initialDinos);

  function handleDinoLike(id) {
    setDinosaurs(
      dinosaurs.map((_dino) =>
        _dino.id === id ? { ..._dino, liked: !_dino.liked } : _dino
      )
    );
  }

  return (
    <>
      <Link href="/">Home</Link>
      <Component
        {...pageProps}
        dinosaurs={dinosaurs}
        onDinoLike={handleDinoLike}
      />
      <hr />
      Irgend ein Footer-Text
    </>
  );
}
