/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from "../../App";

type FavoritoState={
itens:Produto[]
}

const initialState:FavoritoState={itens:[]}

const favoritosSlice=createSlice({
  name:'favoritos',
 initialState,
  reducers:{
    favoritar:(state,action:PayloadAction<Produto>)=>{
      const favorito=action.payload

      if (state.itens.find(f=>f.id===favorito.id)) {
      alert('item já adicionado')
      } else{
        state.itens.push(favorito)
      }
    }

  }
})

export const {favoritar}=favoritosSlice.actions
export default favoritosSlice.reducer
