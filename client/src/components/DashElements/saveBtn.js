// import react
import React from 'react';

const SaveBtn = (props) => (
    <div>
        <button type='button' className='btn btn-secondary' onClick={props.handleSaveClick}> Save </button>
    </div>
)

export default SaveBtn;