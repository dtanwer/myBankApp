import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItem } from "./CarouselItem";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const InfoCarousel = () => {
    return (
        <Carousel responsive={responsive} infinite={true}   >
            <CarouselItem icon="https://www.alliantcreditunion.org/images/uploads/images/piggy-bank2-icon-lrg.svg"
                title="Save Money"
                description="Our High-Rate Savings account pays 63.71 you 14x the bank national average." />
            <CarouselItem icon="https://www.alliantcreditunion.org/images/uploads/images/piggy-bank2-icon-lrg.svg"
                title="Save Money"
                description="Our High-Rate Savings account pays 63.71 you 14x the bank national average." />
            <CarouselItem icon="https://www.alliantcreditunion.org/images/uploads/images/piggy-bank2-icon-lrg.svg"
                title="Save Money"
                description="Our High-Rate Savings account pays 63.71 you 14x the bank national average." />
            <CarouselItem icon="https://www.alliantcreditunion.org/images/uploads/images/piggy-bank2-icon-lrg.svg"
                title="Save Money"
                description="Our High-Rate Savings account pays 63.71 you 14x the bank national average." />
            <CarouselItem icon="https://www.alliantcreditunion.org/images/uploads/images/piggy-bank2-icon-lrg.svg"
                title="Save Money"
                description="Our High-Rate Savings account pays 63.71 you 14x the bank national average." />
            <CarouselItem icon="https://www.alliantcreditunion.org/images/uploads/images/piggy-bank2-icon-lrg.svg"
                title="Save Money"
                description="Our High-Rate Savings account pays 63.71 you 14x the bank national average." />
            <CarouselItem icon="https://www.alliantcreditunion.org/images/uploads/images/piggy-bank2-icon-lrg.svg"
                title="Save Money"
                description="Our High-Rate Savings account pays 63.71 you 14x the bank national average." />
            <CarouselItem icon="https://www.alliantcreditunion.org/images/uploads/images/piggy-bank2-icon-lrg.svg"
                title="Save Money"
                description="Our High-Rate Savings account pays 63.71 you 14x the bank national average." />

        </Carousel>
    )
}
