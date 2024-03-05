import React, {FC, useRef, useState} from 'react';
import './RangeSlider.scss';

interface IRangeSlider {
    min: number,
    max: number,
    value?: number,
}

interface IPosState {
    value: number,
    roundedValue: number
}

const RangeSlider: FC<IRangeSlider> = ({min, max, value}) => {
    const sliderContainerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<IPosState>({value: value | 0, roundedValue: value | 0});

    const calcPosition = (event: MouseEvent) => {
        const rect = sliderContainerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const percent = x / rect.width;
        const totalPos = Math.min(max, Math.max(min, min + percent * (max - min)));
        setPosition({
            value: ((totalPos - min) / (max - min)) * 100,
            roundedValue: Math.round(totalPos),
        });
    }

    const handleMouseDown = () => {
        document.addEventListener('mousemove', calcPosition);
        document.addEventListener('mousedown', calcPosition);
        document.addEventListener('mouseup', destroyHandle);
    }

    const destroyHandle = () => {
        document.removeEventListener('mousemove', calcPosition);
        document.removeEventListener('mousedown', calcPosition);
        document.removeEventListener('mouseup', destroyHandle);
    }

    return (
        <>
            <div className='range-slider'>
                {min}
                <div className='range-slider__container'
                     onMouseDown={handleMouseDown}
                     ref={sliderContainerRef}>
                    <div className='range-slider__progress-line' style={{width: `${position.value}%`}}></div>
                    <div className='range-slider__control' style={{left: `${position.value}%`}}>{position.roundedValue}</div>
                </div>
                {max}
            </div>

        </>

    );
};

export default RangeSlider;
