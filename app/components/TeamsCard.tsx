import React from 'react'
import TeamComponent from './TeamComponent'

const TeamsCard = () => {
    return (

        <div style={{ backgroundColor: 'white', width: 460, borderRadius: 14, padding: '20px 18px 20px 18px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', }}>
            <h3 style={{ textAlign: 'start', marginBottom: 25, fontSize: '2em', color: '#F56A01' }}>Teams</h3>
            <TeamComponent name='Lead Generation Team' rating={99} members={12} />
            <TeamComponent name='Lead Generation Team' rating={99} members={12} />
            <TeamComponent name='Lead Generation Team' rating={99} members={12} />
        </div>

    )
}

export default TeamsCard