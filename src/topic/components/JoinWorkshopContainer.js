import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withAuthPopover } from '../../shared/withAuthPopover';
import PrimaryButton from '../../lib/PrimaryActionButton';

class JoinWorkshopContainer extends React.Component {
    render() {
        const {
            anonymous,
            alreadyAttending,
            leaveText,
            joinText,
            leave,
            attend,
        } = this.props;
        const button = (
            <PrimaryButton
                onClick={alreadyAttending ? leave : attend}
                disabled={anonymous}
            >
                {alreadyAttending ? leaveText : joinText}
            </PrimaryButton>
        );

        const withPopover = anonymous ? withAuthPopover(button) : button;

        return withPopover;
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
});

JoinWorkshopContainer.propTypes = {
    attend: PropTypes.func.isRequired,
    leave: PropTypes.func.isRequired,
    alreadyAttending: PropTypes.bool.isRequired,
    anonymous: PropTypes.bool.isRequired,
    joinText: PropTypes.string.isRequired,
    leaveText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(JoinWorkshopContainer);
