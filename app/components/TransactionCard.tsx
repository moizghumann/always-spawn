import React from 'react'
import UserComponent from './UserComponent';

interface TransactionProp {
    stats: string
}

const TransactionCard = ({ stats }: TransactionProp) => {
    return (
        <div style={{ backgroundColor: 'white', width: 380, borderRadius: 14, padding: '20px 18px 20px 18px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ paddingBottom: 10, fontSize: '2em', color: '#F56A01' }}>Transactions</h3>
                <p style={{ color: '#F56A01' }}>for today</p>
            </div>

            <h2 style={{ display: 'flex', width: '100%', marginBottom: 5, fontSize: '3em', color: '#F56A01' }}>
                80
            </h2>
            <UserComponent name='Oscar Holloway' stats={stats} />
            <UserComponent name='Oscar Holloway' stats={stats} />
            <UserComponent name='Oscar Holloway' stats={stats} />
            <UserComponent name='Oscar Holloway' stats={stats} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                <p style={{ fontSize: '13px', marginTop: 10 }}>
                    View more
                </p>
            </div>
        </div>
    )
}

export default TransactionCard