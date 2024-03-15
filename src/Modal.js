import React, { Children } from 'react'
import  ReactDom  from 'react-dom'
const MODAL_STYLE={
  position:'fixed',
  top:'55%',
  left:'50%',
  backgroundColor:'rgb(255, 255, 255)',
  transform:'translate(-50%,-50%)',
  zIndex:1000,
  height:'78%',
  width:'90%',

}
const OVERLAY_STYLE={
  position:'fixed',
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor:'rgb(0,0,0,.7)',
  zIndex:1000
}
export default function Modal({children, onClose}) {
  return ReactDom.createPortal(
    <div>
      <div style={OVERLAY_STYLE}> </div>
        <div style={MODAL_STYLE}>
          <button className='btn bg-danger fs-4' style={{marginLeft:"90%",marginTop:"-35px"}}onClick={onClose}>X</button>
          {children}
       
      </div>
    </div>,
    document.getElementById('cart-root')
  )
}
