import React from 'react';
import { useHistory } from 'react-router-dom'
import { StepBackwardOutlined } from '@ant-design/icons';

import './style.css';

const ButtonBack = () => {
    const history = useHistory();

    return (
        <button 
            type="button" 
            className="btn-back" 
            onClick={() => history.goBack()}
        >
            <StepBackwardOutlined></StepBackwardOutlined>
        </button>
    );
}

export default ButtonBack;