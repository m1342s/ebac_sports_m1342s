/* eslint-disable prettier/prettier */
import * as S from './styles'


import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'


const Header = () => {
  const itensCarrinho=useSelector((state:RootReducer)=>state.carrinho.itens)
  const valorTotal = itensCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)
 const itensFavoritos=useSelector((state:RootReducer)=>state.favoritos.itens)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritos.length}</span>
        <img src={cesta} />
        <span>
          {itensCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
