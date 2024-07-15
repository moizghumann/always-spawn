import { Avatar, Input } from 'antd';
import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import UserComponent from './UserComponent';

interface DetailsProps {
    heading: string;
    cost: number;
    description: string;
    agentInfo: string
}

const AgentCard = ({ heading, cost, description, agentInfo }: DetailsProps) => {
    return (
        <div style={{ backgroundColor: 'white', width: 400, borderRadius: 14, padding: '20px 18px 20px 18px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <h3 style={{ paddingBottom: 10, fontSize: '2em', color: '#F56A01' }}>{heading}</h3>
                    <p>{description}</p>
                </div>
                <h2 style={{ paddingTop: 4, fontSize: '3em', color: '#F56A01' }}>{cost}</h2>
            </div>
            <div style={{ marginTop: 5, marginBottom: 20 }}>
                <Input placeholder="Search" prefix={<UserOutlined />} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 5 }}>
                <p>Agent name</p>
                <p>{agentInfo}</p>
            </div>
            <UserComponent name='Oscar Holloway' stats={+ 1500} />
            <UserComponent name='Oscar Holloway' stats={+ 1500} />
            <UserComponent name='Oscar Holloway' stats={+ 1500} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                <p style={{ fontSize: '13px', marginTop: 10 }}>View more</p>
            </div>
        </div>
    )
}

export default AgentCard