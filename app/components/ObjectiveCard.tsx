import React, { useState } from 'react';
import { Radio, Progress, RadioChangeEvent } from 'antd';

const ObjectiveCard = () => {
    const [selectedOption, setSelectedOption] = useState('budget');

    const handleToggleChange = (e: RadioChangeEvent) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div
            style={{

                width: 400,
                borderRadius: 14,
                padding: '20px 18px 20px 18px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fff'
            }}
        >
            <div style={{ width: '100%', marginBottom: '20px', textAlign: 'center' }}>
                <h3 style={{ color: '#F56A01', fontSize: '2em', fontWeight: 'bold', textAlign: 'start', marginBottom: '20px' }}>
                    Objectives
                </h3>
                <Radio.Group
                    value={selectedOption}
                    onChange={handleToggleChange}
                    optionType="button"
                    buttonStyle="solid"
                    style={{ marginBottom: '10px', width: '60%' }}
                >
                    <Radio.Button
                        value="budget"
                        style={{
                            borderRadius: '20px 0 0 20px',
                            transition: 'all 0.3s',
                            backgroundColor: selectedOption === 'budget' ? 'black' : '#fff',
                            color: selectedOption === 'budget' ? '#F56A01' : '#F56A01',
                            borderColor: '#FAAD14',
                            width: '50%',
                            textAlign: 'center'

                        }}
                    >
                        budget
                    </Radio.Button>
                    <Radio.Button
                        value="quantity"
                        style={{
                            borderRadius: '0 20px 20px 0',
                            transition: 'all 0.3s',
                            backgroundColor: selectedOption === 'quantity' ? 'black' : '#fff',
                            color: '#F56A01',
                            borderColor: '#FAAD14',
                            width: '50%',
                            textAlign: 'center'
                        }}
                    >
                        quantity
                    </Radio.Button>
                </Radio.Group>
            </div>
            <Progress
                size={130}
                type="circle"
                percent={25}
                format={percent => `${percent} %`}
                strokeColor="#F56A01"
            />
            <div style={{ marginTop: '20px', fontSize: '16px', fontWeight: 'bold', color: '#f56a01' }}>
                ₹ 2300
            </div>
            <div style={{ width: '60%', height: '2px', backgroundColor: 'orange', margin: '5px 0' }}></div>
            <div style={{ fontSize: '12px', color: '#f56a01' }}>
                out of 9200
            </div>
        </div>
    );
};

export default ObjectiveCard;
