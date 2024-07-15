import Image, { StaticImageData } from 'next/image';

interface InfoProps {
    heading: string;
    num: number;
    imageSrc: StaticImageData;
}

const Info = ({ heading, num, imageSrc }: InfoProps) => {
    return (
        <div style={{ width: 250, display: 'flex', flexDirection: 'column', padding: '15px 12px 15px 12px', alignItems: 'start', backgroundColor: 'white', borderRadius: 10, marginBottom: 27, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '2px solid #F56A01', paddingBottom: 15 }}> {/* Adjusted borderBottom */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <h3 style={{ paddingBottom: 10, fontSize: 'large', color: '#F56A01' }}>{heading}</h3> {/* Removed inline style for fontSize */}
                    <h2 style={{ fontSize: '40px', color: '#F56A01' }}>{num}</h2>
                </div>
                <Image src={imageSrc}
                    alt='icon'
                    width={64}
                    height={64}
                />
            </div>
            <h3 style={{ paddingTop: 7, color: '#F56A01' }}>for today</h3>
        </div>
    );
};

export default Info;
