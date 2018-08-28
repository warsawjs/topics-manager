import React from 'react';
import Popover from 'react-awesome-popover';

import 'react-awesome-popover/dest/react-awesome-popover.css';
import { PopoverContent } from '../topic/components/PopoverContent';

export const withAuthPopover = component => (
    <Popover action="hover">
        {component}
        <PopoverContent>Musisz być zalogowany!</PopoverContent>
    </Popover>
);
