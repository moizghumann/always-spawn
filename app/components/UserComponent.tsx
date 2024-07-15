import { Avatar } from 'antd'
import React from 'react'

interface UserProps {
    name: string;
    stats: number | string
}

const UserComponent = ({ name, stats }: UserProps) => {
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: '4', alignItems: 'center' }}>
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <h3 style={{ paddingTop: 6, fontSize: '14px' }}>{name}</h3>
            </div>
            <h3 style={{ paddingTop: 6, fontSize: '14px', color: 'green' }}>+{stats}</h3>
        </div>
    )
}

export default UserComponent