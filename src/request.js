import React from 'react';
import './request.css';

function Request() {
    return(
    <div className='reqContainer'>
        <h2>Working with POST request</h2>
        <input type="text" value='Your name' className='name-fl'/>
        <br />
        <input type="text" value='Email' className='email-fl'/>
        <br />
        <input type="text" value='Phone' className='phone-fl'/>
        <p className='sample-num'>+38 (XXX) XXX - XX - XX</p>
        <p className='pos'>Select your position</p>
        <div className='positions'>
            <input type="radio" name="" id="fr" value='Frontend developer'/>
            <label for="fr" id="fr">Frontend developer</label>
            <br />
            <input type="radio" name="" id="bck" value='Backend developer'/>
            <label for="bck" id="bck">Backend developer</label>
            <br />
            <input type="radio" name="" id="ds" value='Designer'/>
            <label for="ds" id="ds">Designer</label>
            <br />
            <input type="radio" name="" id="qa" value='QA'/>
            <label for="qa" id="qa">QA</label>
            </div>
            <br />
            <br />
        <div className='uploading'>
            <button className='btn-upl'>Upload</button>
            <input type="text" value='Upload your photo' className='ph-fl'/>
        </div>
        <br />
        <br />
        <button className='sgn-btn'>Sign up</button>
    </div>
    )  
}
export default Request;