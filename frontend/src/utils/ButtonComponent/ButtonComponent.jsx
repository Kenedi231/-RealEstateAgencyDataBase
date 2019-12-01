import React from 'react';
import './ButtonComponentStyles.css';

export default function ButtonComponent(props) {
    const {loading, disabled, text, onClick} = props;
    const onButtonClick = () => {
        onClick && onClick();
    };

    return (
        <button
            className='button'
            disabled={loading ||disabled}
            onClick={onButtonClick}
        >
            {
                !loading && <p className='text'>{text}</p>
            }
            {
                loading && <img src={require('../../resources/loading.svg')} alt='loading...' className='loading' />
            }
        </button>
    )
}