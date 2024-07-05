import React from 'react'
import { VideoPlayingBox } from './VideoPlayingBox'
import { SpotLightBox } from './SpotLightBox'
import { WelcomeToDoveBox } from './WelcomeToDoveBox'
import { FooterBox } from './FooterBox'
import { CopyRightBox } from './CopyRightBox'
import { WhatsAppBox } from './WhatsAppBox'
import { SliderVideos } from './SliderVideos'
import { SliderImages } from './SliderImages'

export const MainBody = () => {
  return (
    <>
      <VideoPlayingBox/>
      <SpotLightBox/>
      <SliderVideos/>
      <WelcomeToDoveBox/>
      <SliderImages/>
      
    </>
  )
}
