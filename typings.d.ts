declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'react-slick' {
    import * as React from 'react';

    interface SliderProps {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        arrows?: boolean;
        className?: string;
        adaptiveHeight?: boolean;
        centerMode?: boolean;
        centerPadding?: string;
        draggable?: boolean;
        fade?: boolean;
        focusOnSelect?: boolean;
        pauseOnHover?: boolean;
        responsive?: Array<{
            breakpoint: number;
            settings: Partial<SliderProps>;
        }>;
        // Thêm các props khác nếu cần
    }

    class Slider extends React.Component<SliderProps> { }

    export default Slider;
}