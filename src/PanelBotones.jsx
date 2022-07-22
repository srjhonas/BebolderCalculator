import React from 'react'
import Boton from './Boton'

const PanelBotones = (props) => {
  return (
    <div >

        <div className='fila-botones'>
          <Boton name="C" />
          <Boton name="CE" />
          <Boton name="+/-" />
        </div>
        
        <div className='fila-botones'>
          <Boton name="7"  />
          <Boton name="8"  />
          <Boton name="9"  />
          <Boton name="÷"  />
        </div>
        <div className='fila-botones'>
          <Boton name="4"  />
          <Boton name="5"  />
          <Boton name="6"  />
          <Boton name="x"  />
        </div>
        <div className='fila-botones'>
          <Boton name="1"  />
          <Boton name="2"  />
          <Boton name="3"  />
          <Boton name="-"  />
        </div>
        <div className='fila-botones'>
          <Boton name="."  />
          <Boton name="0"  />
          <Boton name="="  />
          <Boton name="+"  />
        </div>
    </div>
  )
}

export default PanelBotones