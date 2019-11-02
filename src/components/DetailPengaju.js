import React, { useState, useEffect, Fragment } from 'react';
import { Icon, Accordion, Button } from 'semantic-ui-react'
import DetailSurat from './DetailSurat';

const data = [
    {
        "nama": "Adam",
        "noHp": "087123",
        "penerima": "Sekertaris",
        "namaAcara": "Pk2 Maba",
        "key": '1',
        "status": 1,
        "surat": [
            {
                "jenisSurat": "undangan",
                "keperluanSurat": "external",
                "penerima": "Syaukani",
                "key": "asddfg",
                "url": "www.googlecom"
            }, {
                "jenisSurat": "asd",
                "keperluanSurat": "asd",
                "penerima": "123",
                "key": "asddfgsd",
                "url": "www.asdasf"
            }, {
                "jenisSurat": "undanga23n",
                "keperluanSurat": "exte1313rnal",
                "penerima": "Syaggukani",
                "key": "asddfgsdasd2",
                "url": "www.googlecasdggom"
            }
        ]
    },
    {
        "nama": "Adam123",
        "noHp": "087123asd",
        "penerima": "Sekerasdasdtaris",
        "namaAcara": "Pk2 Mabasdasda",
        "status": 0,
        "key": '2',
        "surat": [
            {
                "jenisSurat": "undasdangan",
                "keperluanSurat": "exasdternal",
                "penerima": "Syaukaniasd",
                "key": "asddfdgdgg",
                "url": "www.gooasdasdgle.com"
            }, {
                "jenisSurat": "asdasgg",
                "keperluanSurat": "aswer3d",
                "penerima": "123etysdf",
                "key": "asd123",
                "url": "www.aasdsdasf"
            }
        ]
    }
];


function DetailAdapter(props) {
    let [show, setShow] = useState(false);
    function renderStatus() {
        switch (props.data.status) {
            case 0:
                return ("Not Checked")
            case 1:
                return ("Rejected")
            case 2:
                return ("Accepted")
            default:
                return ("Something Wrong")
        }
    }
    return (
        <Fragment>
            <Accordion.Title active={show} onClick={() => {
                setShow(!show);
            }}>
                <div >
                    <Icon name='dropdown' />
                    <div style={{ display: 'flex', marginRight: '20px' }}>
                        <h4 >Pengaju : </h4>
                        <h4>{props.data.nama}</h4>
                    </div>

                    <div style={{ display: 'flex', marginRight: '20px' }}>
                        <h4 >Nama Acara : </h4>
                        <h4>{props.data.namaAcara}</h4>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <h4 >Status : </h4>
                        <h4>{renderStatus()} </h4>
                    </div>


                </div>
            </Accordion.Title>
            <Accordion.Content active={show} >
                {props.data.surat.map(data => (
                    <DetailSurat data={data} type />

                ))}
                <Button>Kirim</Button>
            </Accordion.Content>
        </Fragment>
    )
}

export default function DetailPengaju() {
    let [surat, setSurat] = useState('');

    useEffect(() => {
        setSurat(data.surat);
    })

    return (
        <Accordion fluid styled
            exclusive={false}>
            {data.map((data) => {
                return (
                    <DetailAdapter key={data.key} data={data} />
                )
            })}
        </Accordion>
    )

}