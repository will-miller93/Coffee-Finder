// import react
import React from 'react';

const ShopForm = () => (
    <div>
        <form>
            <div className='form-group'>
                <label htmlFor='inputName'>Shop Name</label>
                <input type='name' className='form-control' id='shopName' placeholder='Shop Name'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='inputPhone'>Shop Number</label>
                <input type='number' className='form-control' id='shopNumber' placeholder='Shop Number'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='inputAddress'>Address</label>
                <input type='address' className='form-control' id='shopAddress' placeholder='Shop Address'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='inputHours'>Hours of Operation</label>
                <input type='hours' className='form-control' id='shopHours' placeholder='Shop Hours'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='inputWebsite'>Website Link</label>
                <input type='website' className='form-control' id='shopWebsite' placeholder='Website URL'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='inputFacebook'>Facebook Link</label>
                <input type='facebook' className='form-control' id='shopFB' placeholder='FaceBook URL'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='inputInsta'>Instagram Link</label>
                <input type='instagram' className='form-control' id='shopInsta' placeholder='Instagram URL'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='inputTwitter'>Twitter Link</label>
                <input type='twitter' className='form-control' id='shopTwitter' placeholder='Twitter URL'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='inputRoaster'>Roasters Used</label>
                <input type='roaster' className='form-control' id='shopRoaster' placeholder='Roasters Used'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='shopDescription'>Shop Description</label>
                <textarea className='form-control' id='shopDescription' rows='4' placeholder='What else would you like people to know about your shop?'></textarea>
            </div>
            <div className='form-group'>
                <label htmlFor='shopMenu'>Add your shops Menu!</label>
                <input type='file' className='form-control-file' id='shopMenu'></input>
            </div>
        </form>
    </div>
);

export default ShopForm;
