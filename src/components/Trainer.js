import React from 'react';
import PropTypes from 'prop-types';
import {UserModel} from '../shared/models/UserModel';

const Trainer = ({trainer}) => (
    <div>
        <p>{trainer.name}</p>
        <p>{trainer.email}</p>
    </div>
);

Trainer.propTypes = {
    trainer: PropTypes.instanceOf(UserModel).isRequired
};

export default Trainer;
