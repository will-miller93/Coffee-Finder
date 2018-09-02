// import react
import React from 'react';

const ShopForm = () => {
    <div>
        <form>
            <div className='form-group'>
                <label for='inputName'>Shop Name</label>
                <input type='name' className='form-control' id='shopName' placeholder='Shop Name'></input>
            </div>
            <div className='form-group'>
                <label for='inputPhone'>Shop Number</label>
                <input type='number' className='form-control' id='shopNumber' placeholder='Shop Number'></input>
            </div>
            <div className='form-group'>
                <label for='inputAddress'>Address</label>
                <input type='address' className='form-control' id='shopAddress' placeholder='Shop Address'></input>
            </div>
            <div className='form-group'>
                <label for='inputHours'>Hours of Operation</label>
                <input type='hours' className='form-control' id='shopHours' placeholder='Shop Hours'></input>
            </div>
            <div className='form-group'>
                <label for='inputFacebook'>Facebook Profile</label>
                <input type='facebook' className='form-control' id='shopFB' placeholder='FaceBook URL'></input>
            </div>
            <div className='form-group'>
                <label for='inputInsta'>Instagram Profile</label>
                <input type='instagram' className='form-control' id='shopInsta' placeholder='Instagram URL'></input>
            </div>
            <div className='form-group'>
                <label for='inputTwitter'>Twitter Profile</label>
                <input type='twitter' className='form-control' id='shopTwitter' placeholder='Twitter URL'></input>
            </div>
            <div className='form-group'>
                <label for='inputRoaster'>Roasters Used</label>
                <input type='roaster' className='form-control' id='shopRoaster' placeholder='Roasters Used'></input>
            </div>
            <div className='form-group'>
                <label for='shopDescription'>Shop Description</label>
                <textarea className='form-control' id='shopDescription' rows='4' placeholder='What else would you like people to know about your shop?'></textarea>
            </div>
            <div className='form-group'>
                <label for='shopMenu'>Add your shops Menu!</label>
                <input type='file' className='form-control-file' id='shopMenu'></input>
            </div>
        </form>
    </div>
}

export default ShopForm;
