import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import { Form, Button, Dropdown, Divider } from 'semantic-ui-react'
import './pengajuan.scss';
import shortid from 'shortid';
import DetailItem from './DetailSurat';



const kementrian = [
    { key: 'pr', value: 'presiden', text: 'Presiden/Wakil Presiden' },
    { key: 'sk', value: 'sekertaris', text: 'Sekertaris Pimpinan' },
    { key: 'pj', value: 'pjmo', text: 'Pusat Jaminan Mutu Organisasi' },
    { key: 'ps', value: 'psdm', text: 'Kementrian Pengembangan Sumber Daya Manusia' },
    { key: 'pe', value: 'perhub', text: 'Kementrian Perhubungan' },
    { key: 'so', value: 'sosma', text: 'Kementiran Sosial Masyrakat' },
    { key: 'ad', value: 'advo', text: 'Kementrian Advokasi dan Kesejahteraan Mahasiswa' },
    { key: 'ka', value: 'kastrat', text: 'Kementrian Kajian Aksi Strategis' },
    { key: 'bi', value: 'bismit', text: 'Biro Bisnis Dan Kemitraan' },
    { key: 'me', value: 'medinfo', text: 'Biro Media Kreatif Informasi' },
    { key: 'adk', value: 'adkeu', text: 'Biro Administrasi Keuangan' },
    { key: 'pi', value: 'pit', text: 'BIro Pengembangan Informasti dan Teknologi' },
]

const jenis = [
    { key: 'af', value: 'permohonan', text: 'Permohonan' },
    { key: 'ax', value: 'undangan', text: 'Undangan' },
    { key: 'al', value: 'pemberitahuan', text: 'Pemberitahuan' },
    { key: 'dz', value: 'pengumuman', text: 'Pengumuman' },
    { key: 'ad', value: 'mandat', text: 'Mandat' },
    { key: 'ao', value: 'rekomendasi', text: 'Rekomendasi' },
    { key: 'ai', value: 'keterangan', text: 'Keterangan' },
    { key: 'ag', value: 'penugasan', text: 'Penugasan' },
    { key: 'ar', value: 'ucapan', text: 'Ucapan' },
    { key: 'am', value: 'memo', text: 'Memo' },
    { key: 'aw', value: 'nota', text: 'Nota' },
    { key: 'au', value: 'peringatan', text: 'Peringatan' },
    { key: 'pe', value: 'penyertaan', text: 'Penyertaan' },
    { key: 'pr', value: 'perjanjian', text: 'Perjanjian' },
    { key: 'bl', value: 'balasan', text: 'Balasan' },
    { key: 'sk', value: 'suratKeputusan', text: 'Surat Keputusan' },
]

const keperluan = [
    { key: 'in', value: 'internal', text: 'Internal' },
    { key: 'ex', value: 'external', text: 'Eksternal' },
]

const DropdownExampleSearchSelection = (props) => {
    return (
        <Dropdown
            placeholder='Kementrian'
            fluid
            search
            selection
            options={props.data}
            onChange={props.onClick}

        />
    )
}

const DetailSurat = ({ onSend }) => {
    let [jenisSurat, setJenisSurat] = useState('');
    let [keperluanSurat, setKeperluanSurat] = useState('');
    let [penerima, setPenerima] = useState('');
    let [url, setUrl] = useState();
    return (
        <Form>
            <Form.Field required>
                <label>Pilih Jenis Surat </label>
                <DropdownExampleSearchSelection data={jenis} onClick={(e, { value }) => {
                    setJenisSurat(value);
                }} />
            </Form.Field>
            <Form.Field required>
                <label>Kategori Penerima </label>
                <DropdownExampleSearchSelection data={keperluan} onClick={(e, { value }) => {
                    setKeperluanSurat(value);
                }} />
            </Form.Field>
            <Form.Input
                fluid
                label='Nama Penerima'
                placeholder='Adam S'
                required
                value={penerima}
                onChange={(data) => {
                    setPenerima(data.target.value);
                }}
            />

            <Form.Input
                fluid
                label='Url'
                placeholder='www.drive.google.com'
                required
                value={url}
                onChange={(data) => {
                    setUrl(data.target.value);
                }}
            />
            <Button type="submit" onClick={() => {
                let surat = {
                    key: shortid.generate(),
                    jenisSurat: jenisSurat,
                    keperluanSurat: keperluanSurat,
                    penerima: penerima,
                    url: url
                }
                onSend(surat);
                setJenisSurat('');
                setKeperluanSurat('');
                setPenerima('');
                setPenerima('');
                setUrl('');
            }}>Tambah Surat </Button>
        </Form>
    )

}




export default function PengajuanSurat() {

    let [nama, setNama] = useState('');
    let [kementrianField, setKementrian] = useState('');
    let [nohp, setNohp] = useState('');
    let [acara, setAcara] = useState();
    let [surat, setSurat] = useState([]);


    const getSurat = (val) => {
        setSurat([...surat, val]);
    }

    const deletSurat = (val) => {
        setSurat(surat.filter(obj => obj.key !== val));
    }

    return (
        <div style={{ padding: '16px' }}>
            <h3>Ajukan Surat</h3>
            <div style={{ border: '0.1rem solid', padding: '16px', borderRadius: '5px', borderColor: '#bfbcb4' }}>
                <h4>Isikan Data diri pengajuan surat, serta asal surat</h4>
                <Form>
                    <Form.Input
                        fluid
                        label='Nama'
                        placeholder='Adam S'
                        required
                        
                        onChange={(e, { value }) => {
                            setNama(value);
                        }}
                    />
                    <Form.Input
                        fluid
                        label='No hp / line'
                        placeholder='08xxx'
                        required
                        type='number'
                        onChange={(e, { value }) => {
                            setNohp(value);
                        }}
                    />
                    <Form.Field required>
                        <label>Kementrian </label>
                        <DropdownExampleSearchSelection data={kementrian} onClick={(e, { value }) => {
                            setKementrian(value);
                        }} />
                    </Form.Field>


                    <Form.Input
                        fluid
                        label='Nama Acara'
                        placeholder='pk2 maba'
                        required
                        onChange={(e, { value }) => {
                            setAcara(value);
                        }}
                    />
                </Form>

            </div>
            <Divider />
            <div style={{ border: '0.1rem solid', padding: '16px', borderRadius: '5px', borderColor: '#bfbcb4' }}>
                <h4>Isikan Detail masing masing surat, anda dapat mengajukan beberapa surat</h4>

                <DetailSurat onSend={getSurat} />


            </div>
            <Divider />
            <h4>List Surat</h4>
            {surat.length ? surat.map((data) => {
                return (
                    <DetailItem data={data} key={data.key} onDelete={deletSurat} />
                )
            }) : <h4>Belum ada surat ... </h4>}
            <Divider />

            <Button fluid style={{ marginTop: '1rem' }} onClick={() => {
                console.log(nama, nohp, kementrianField, acara, surat );
            }}> Ajukan Surat</Button>
        </div>
    )
}