import React from 'react';
import fsuser from './1user.jpg';
import scuser from './2user.jpg';
import truser from './3user.jpg';
import fruser from './4user.jpg';
import ftuser from './5user.jpg';
import sxuser from './6user.jpg';
import './users.css';

function Users() {
    return (
    <div className='users'>
        <h1 className='ttl'>Working with GET request</h1>
            <div class="grid-container">
                <div class="grid-item">
                    <img src={fsuser} className='u' alt="" />
                    <p className='up'>Salvador Stewart Flynn Thomas Salva Salve...</p>
                    <p className='sides'>Leading specialist of the department of cent... frontend_develop@gmail.com </p>
                    <p className='down'>+38 (098) 278 44 24</p>
                </div>
                <div class="grid-item">
                    <img src={scuser} className='u' alt="" />
                    <p className='up'>Takamaru Ayako Jurrien</p>
                    <p>Lead Independent Director Takamuru@gmail.com </p>
                    <p className='down'>+38 (098) 278 90 24</p>
                </div>
                <div class="grid-item">
                    <img src={truser} className='u' alt="" />
                    <p className='up'>Ilya</p>
                    <p className='sides'>Co-Founder and CEO Ilya_founder@gmail.com </p>
                    <p className='down'>+38 (098) 235 44 24</p>
                    </div>  
                <div class="grid-item">
                    <img src={fruser} className='u' alt="" />
                    <p className='up'>Alexandre</p>
                    <p className='sides'>Lead Independent Director Alexandr_develop@gmail.com </p>
                    <p className='down'>+38 (098) 198 44 24</p>
                    </div>
                <div class="grid-item">
                    <img src={ftuser} className='u' alt="" />
                    <p className='up'>Winny</p>
                    <p className='sides'>Former Senior Director Winny_develop@gmail.com </p>
                    <p className='down'>+38 (098) 278 22 88</p>
                    </div>
                <div class="grid-item">
                    <img src={sxuser} className='u' alt="" />
                    <p className='up'>Simon</p>
                    <p className='sides'>President of Commerce Simon@gmail.com </p>
                    <p className='down'>+38 (098) 278 44 00</p>
                    </div>     
            </div>
             <button className='btn-info'>Show more</button>
    </div>
    )   
}
export default Users;