import React, { useState } from 'react';
import Layout from '../../components/layout';
import RegistrationForm from '../../features/registration';

function Register(props) {
  return (
    <Layout>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7 py-3 py-md-5'>
            <h1 className='display-2'>Modernization CMS Platform</h1>
            <p className='lead text-muted'>
              Steadfast removes road blocks for sales teams by providing a
              cohesive platform that allows for online growth using modern,
              scalable and secure CMS application for business.
            </p>
          </div>
          <div className='col-lg-5 pl-lg-5 pb-3 py-lg-5'>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
