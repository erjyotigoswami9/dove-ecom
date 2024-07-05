import React from 'react'
import { FooterBox } from './bodyComponents/FooterBox'
import { WhatsAppBox } from './bodyComponents/WhatsAppBox'
import { CopyRightBox } from './bodyComponents/CopyRightBox'

export const FooterComponent = () => {
  return (
    <>
    <FooterBox/>
      <WhatsAppBox/>
      <CopyRightBox/>
    </>
  )
}
