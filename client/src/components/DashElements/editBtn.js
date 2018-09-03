// import react
import React from 'react';

const EditBtn = (props) => (
    <div>
        <button type='button' className='btn btn-secondary' onClick={props.toggleInputs}> Edit </button>
    </div>
)

export default EditBtn;