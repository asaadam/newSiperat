import React, { Fragment, useState, useEffect } from 'react';
import { Divider, Message, Icon, Checkbox,Input} from 'semantic-ui-react'

export default function DetailSurat(props) {
    let [detail, setDetail] = useState(false);
    useEffect(() => {
        if (props.type) {
            setDetail(true);
        }
    }, [props.type])
    return (
        <Fragment>
            <Message >
                {detail ? 
                  <Fragment/>
                  :<Icon name="window close" onClick={() => {
                    props.onDelete(props.data.key);
                }} />}
                <h5>Jenis Surat : {props.data.jenisSurat}</h5>
                <h5>Keperluan :  {props.data.keperluanSurat}</h5>
                <h5>Kategori Penerima :  {props.data.penerima}</h5>
                <h5>Url Surat :  {props.data.url}</h5>
                {detail ? <Input  placeholder='Notes'/>:<Fragment/>}
            </Message>
            <Divider />
        </Fragment>
    )

}