'use client'


import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
import { useSwiper } from 'swiper/react'

export default function WorkSliderBtns({containerStyles, btnStyles, iconsStyles, num}: {containerStyles: string, btnStyles: string, iconsStyles: string, num: number}){
    const swiper = useSwiper()
    
    function rightClick(){
        if (swiper.activeIndex === num-1){
            swiper.slideTo(0)
        } else {
            swiper.slideNext()
        }
    }

    function leftClick(){
        swiper.slideTo(swiper.activeIndex-1)
    }
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => leftClick()}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button className={btnStyles} onClick={() => rightClick()}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    )
}