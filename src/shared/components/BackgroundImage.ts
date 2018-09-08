import React from 'react';
import styled, { StyledFunction } from 'styled-components';

export interface OwnProps {
    url: string;
    width?: string;
    height?: string;
}

export type PropertiesA = OwnProps &
    React.HTMLAttributes<HTMLDivElement> &
    React.HTMLProps<HTMLDivElement>;

const div: StyledFunction<PropertiesA> = styled.div;

export const BackgroundImage = div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-size: cover;
  background-position: center;
  background-image: ${props => (props.url ? `url(${props.url})` : `none`)};
`;
