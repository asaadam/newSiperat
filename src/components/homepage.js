import React from 'react';
import { Tab, Grid } from 'semantic-ui-react'
import BukuTamu from './BukuTamu';
import CekSurat from './cekSurat';
import PengajuanSurat from './PengajuanSurat';
export default function HomePage() {
  
    const panes = [
        {
            menuItem: 'Pengajuan Surat',
            render: () => <Tab.Pane attached={false}>


                  <PengajuanSurat/>
                
                

            </Tab.Pane>,
        },
        {
            menuItem: 'Buku Tamu',
            render: () => <Tab.Pane attached={false}><BukuTamu /></Tab.Pane>,
        },
        {
            menuItem: 'Cek Status Surat',
            render: () => <Tab.Pane attached={false}><CekSurat /></Tab.Pane>,
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