import React from 'react';
import PropTypes from 'prop-types';
import {UserModel} from '../shared/models/UserModel';

const Trainer = ({trainer, important}) => (
    <div style={important ? {backgroundColor: 'yellow'} : {}}>
        <p>{trainer.name}</p>
    </div>
);

Trainer.propTypes = {
    trainer: PropTypes.instanceOf(UserModel).isRequired,
    important: PropTypes.bool
};

export default Trainer;
