import React from 'react';
import { Link } from 'react-router-dom'
import { StepBackwardOutlined } from '@ant-design/icons';

import './style.css';

const ButtonBack = ({ to }) => {
    return (
        <Link to={to} className="btn-back">
            <StepBackwardOutlined></StepBackwardOutlined>
        </Link>
    );
}

export default ButtonBack;