import { Avatar, Badge } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import React from 'react'
import Image from 'next/image';

interface TeamProp {
    name: string;
    rating: number;
    members: number
}

const TeamComponent = ({ name, rating, members }: TeamProp) => {
    return (
        <div style={{ border: '1px solid #bfbfbf', borderRadius: 14, padding: 12, marginBottom: 11 }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: 6 }}>
                <h4>{name}</h4>
                <Badge
                    className="site-badge-count-109"
                    count={rating}
                    style={{ backgroundColor: 'red' }}
                />
            </div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: 70, backgroundColor: '#e5e5e5', alignItems: 'center', gap: 8, padding: '1px 8px 1px 0px' }}>
                    <Avatar size={20} style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                    <h5 style={{ fontWeight: 'bold' }}>Violet Robbins</h5>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
                    <Image src="/assets/icons/team.svg"
                        height={20}
                        width={20}
                        alt='teams icon' />
                    <h4>{members} Agents</h4>
                </div>
            </div>
        </div>
    )
}

export default TeamComponent