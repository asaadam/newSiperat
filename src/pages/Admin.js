import React from 'react';
import { Tab, Grid } from 'semantic-ui-react'
import DetailPengaju from '../components/DetailPengaju';

export default function Admin() {
    const panes = [
        {
            menuItem: 'Pengajuan Surat',
            render: () => <Tab.Pane attached={false}>
                <DetailPengaju />
            </Tab.Pane>,
        },
        {
            menuItem: 'Buku Tamu',
            render: () => <Tab.Pane attached={false}>                
            <h1>Buku Tamu</h1>           
            </Tab.Pane>,
        },
    ]
    const TabExampleAttachedFalse = () => (
        <Tab menu={{ attached: false }} panes={panes} />
    )

    if (window.innerWidth < 750) {
        return (
            <TabExampleAttachedFalse />
        )
    }
    else {
        return (
            <Grid columns='equal'>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column width={8}>
                    <TabExampleAttachedFalse />
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid>
        )

    }
}

// return (
//     <div style={{padding:'16px'}}>
//     <div style={{ border: '0.1rem solid', padding: '16px', borderRadius: '5px', borderColor: '#bfbcb4' }}>
//     <h4>List Surat</h4>



//     <DetailPengaju/>

//     </div>
//     </div>
// )
