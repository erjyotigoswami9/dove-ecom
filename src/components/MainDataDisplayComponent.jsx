import React, { useContext } from 'react'
import { Navbar } from './Navbar/Navbar'
import { MainBody } from './bodyComponents/MainBody'
import { FooterComponent } from './FooterComponent'
import { AuthContext } from '../context/AuthContext'
import { InputSearchDataDisplayComponent1 } from './bodyComponents/InputSearchDataDisplayComponent1'

export const MainDataDisplayComponent = () => {
  
  let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ;

  return (
    <>
       <Navbar/>
       { inputSearchvalue.length==0 ?  
        <MainBody/>  :
        <InputSearchDataDisplayComponent1/>  }
        <FooterComponent/>
    </>
  )
}
