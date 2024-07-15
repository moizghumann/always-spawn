import { Card } from 'antd';

const styles = {
    card: {
        borderRadius: '14px',
        overflow: 'hidden',
        maxWidth: '950px',
        height: '334px',
        marginBottom: 10,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
    },
    cardBody: {
        padding: '0',
    },
    header: {
        fontSize: '2em',
        fontWeight: 'bold',
        margin: '16px',
        marginBottom: '60px',
        color: '#F56A01'
    },
    chart: {
        position: 'relative' as 'relative',
        height: '150px',
    },
    point: {
        position: 'absolute' as 'absolute',
        bottom: 0,
        textAlign: 'center' as 'center',
        transform: 'translateX(-50%)',
    },
    pointLeft: {
        transform: 'translateX(0)',
        textAlign: 'left' as 'left',
    },
    pointRight: {
        transform: 'translateX(-100%)',
        textAlign: 'right' as 'right',
    },
    value: {
        color: '#f56a00',
        fontSize: '14px',
        fontWeight: 'bold',

    },
    date: {
        color: '#666',
        fontSize: '12px',

    },
    line: {
        position: 'absolute' as 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    divider: {
        position: 'absolute' as 'absolute',
        height: '240px',
        width: '1px',
        backgroundColor: '#ccc',
        bottom: -52,
    }
};

const SalesForecast = () => (
    <Card style={styles.card} bodyStyle={styles.cardBody}>
        <div style={styles.header}>Sales forecast</div>
        <div style={styles.chart}>
            <div style={{ ...styles.point, ...styles.pointLeft, left: '4%', bottom: '27%' }}>
                <div style={styles.value}>200<br />processed</div>

            </div>
            <div style={{ ...styles.divider, left: '25%' }}></div>
            <div style={{ ...styles.point, left: '37%', bottom: '30%' }}>
                <div style={styles.value}>250<br />processed</div>

            </div>
            <div style={{ ...styles.divider, left: '50%' }}></div>
            <div style={{ ...styles.point, left: '63%', bottom: '30%' }}>
                <div style={styles.value}>100<br />processed</div>

            </div>
            <div style={{ ...styles.divider, left: '75%' }}></div>
            <div style={{ ...styles.point, ...styles.pointRight, left: '95%', bottom: '30%' }}>
                <div style={styles.value}>50<br />processed</div>

            </div>

            <svg style={styles.line} viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,100 0,80 25,75 50,65 75,60 100,50 100,100" fill="#f56a00" opacity="0.2" />
                <polyline points="0,80 25,75 50,65 75,60 100,50" stroke="#f56a00" strokeWidth="2" fill="none" />
            </svg>



        </div >
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 5, color: '#F56A01' }}>
            <div style={{ marginLeft: 30, marginTop: 4 }}>Of deals in the <br />works right now</div>
            <div style={{ marginLeft: 70 }}>after <br /><span style={{ fontSize: 20, fontWeight: 'bold' }}>20 days</span></div>
            <div style={{ marginLeft: 115 }}>after <br /><span style={{ fontSize: 20, fontWeight: 'bold' }}>40 days</span></div>
            <div style={{ marginLeft: 120 }}>after <br /><span style={{ fontSize: 20, fontWeight: 'bold' }}>60 days</span></div>
        </div>
    </Card >
);

export default SalesForecast;
