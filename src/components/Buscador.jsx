import React, { useState } from "react";
import useArtistasStore from "../zustand/Artistas-Zustand";

const Buscador = () => {
  const [artista, setArtista] = useState("");

  const getArtistaByName = useArtistasStore(state => state.getArtistaByName)
   

  return (
    <form>
    <div className="form-group">
      <label className="text-light">Buscar Artista</label>
      <input className="form-control w-25 mb-2" type="text" value={artista} onChange={(e) => setArtista(e.target.value)} />
    </div>
    </form>
  );
};

export default Buscador;
