import React, { SFC } from 'react';
import PrimaryButton from '../../lib/PrimaryActionButton';
import { Topic } from '../../shared/models/topic';
import { User } from '../../shared/models/user';
import { withAuthPopover } from '../../shared/withAuthPopover';

export interface JoinWorkshopProps {
    attend: (topic: Topic, user: User) => void,
    leave: (topic: Topic, user: User) => void,
    alreadyAttending: boolean,
    anonymous: boolean,
    joinText: string,
    leaveText: string,
}

export const JoinWorkshopContainer: SFC<JoinWorkshopProps> = ({
                                                                  anonymous,
                                                                  alreadyAttending,
                                                                  leaveText,
                                                                  joinText,
                                                                  leave,
                                                                  attend,
                                                              }) => {
    const button = (
        <PrimaryButton
            onClick={alreadyAttending ? leave : attend}
            disabled={anonymous}>
            {alreadyAttending ? leaveText : joinText}
        </PrimaryButton>
    );

    return anonymous ? withAuthPopover(button) : button;
};
