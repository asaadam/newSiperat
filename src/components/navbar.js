import React from 'react';
import { Button } from 'semantic-ui-react'
import Siperat from '../assets/siperat.png';
import '../components/navbar.scss';
import { Link } from 'react-router-dom';



export default function DenseAppBar() {

  return (


    <div className="ui menu">
      <img src={Siperat} alt="siperat logo" className="icon" />
      <div className="right menu">
        <Link to='/login'>
          <Button>Login</Button>
        </Link>
      </div>
    </div>

  );
}
