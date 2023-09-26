import React, { useState } from 'react'
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap'

const Banner = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [animating, setAnimating] = useState(false);


    const bannerItems = [
        {
            src: require('../../app/assets/img/banner1.jpg'),
            altText: 'Access from anywhere, anytime. Books just a click away.',
            caption: 'Bringing you the very best of content.',
            key: 1,
        },
        {
            src: require('../../app/assets/img/banner2.jpg'),
            altText: 'Thousands of eBooks',
            caption: 'Thousands of eBooks',
            key: 2,
        },
        {
            src: require('../../app/assets/img/banner3.jpg'),
            altText: '100+ eNewspapers and eMagazines',
            caption: '100+ eNewspapers and eMagazines',
            key: 3,
        }
    ]

    const next = () => {
        if (animating) return;
        const nextBannerIndex = currentBanner === bannerItems.length - 1 ? 0 : currentBanner + 1;
        setCurrentBanner(nextBannerIndex);
    }
    const previous = () => {
        if (animating) return;
        const nextBannerIndex = currentBanner === 0 ? currentBanner.length - 1 : currentBanner - 1;
        setCurrentBanner(nextBannerIndex);
    }
    const goToIndex = (newIndex) => {
        if (animating) return;
        setCurrentBanner(newIndex);
    };
    const slides = bannerItems.map((banner) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={banner.src}>
                <img src={banner.src} alt={banner.altText}/>
                <CarouselCaption
                    captionText={banner.altText}
                    captionHeader={banner.caption} 
                    className='bannerCaption'/>
            </CarouselItem>
        )
    })
    return (
        <Carousel
        dark
            activeIndex={currentBanner}
            next={next}
            previous={previous}
        >
            <CarouselIndicators
                items={bannerItems}
                activeIndex={currentBanner}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    )
}

export default Banner