import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface InfoProps {
    heading: string;
    num: number;
    imageSrc: StaticImageData;
}

const Info: React.FC<InfoProps> = ({ heading, num, imageSrc }: InfoProps) => {
    return (
        <div style={{ width: 250, display: 'flex', flexDirection: 'column', padding: 10, alignItems: 'start', backgroundColor: 'white', borderRadius: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '2px solid black', paddingBottom: 15 }}> {/* Adjusted borderBottom */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <h3>{heading}</h3> {/* Removed inline style for fontSize */}
                    <h2>{num}</h2>
                </div>
                <Image src={imageSrc}
                    alt='icon'
                    width={24}
                    height={24}
                />
            </div>
            <h3>for today</h3>
        </div>
    );
};

export default Info;
