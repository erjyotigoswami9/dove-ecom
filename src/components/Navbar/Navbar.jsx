import React, { useContext } from 'react'
import { OfferNavbar } from './OfferNavbar'
import { MenuNavbar } from './MenuNavbar'
import { MediaResponsiveNavbar } from './MediaResponsiveNavbar'
import { ModalListNavbar } from './ModalListNavbar'
import { AuthContext } from '../../context/AuthContext'

export const Navbar = () => {
  
  let { showModalDivOnClick , setShowModalDivOnClick } = useContext(AuthContext) ;
  return (
    <>
        <OfferNavbar/>
        <MenuNavbar/>
        <MediaResponsiveNavbar/>
        { showModalDivOnClick && <ModalListNavbar/> }
        
    </>
  )
}
