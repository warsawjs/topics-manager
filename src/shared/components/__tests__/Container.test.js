import React from 'react';
import TestRenderer from 'react-test-renderer';
import { configure } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import Container from '../Container';

configure({ adapter: new Adapter() });

const CONTAINER_CONTENT = 'This is the container\'s content';

describe('<Container>', () => {



    it('should render as a <div /> tag when props.type is undefined', function() {
        const renderedContainer = renderContainer();
        expect(renderedContainer.type).toBe('div');
    });

    it('should render as a <div /> tag when props.type="div"', function() {
        const renderedContainer = renderContainer({ type: 'div' });
        expect(renderedContainer.type).toBe('div');
    });

    it('should render as a <header /> tag when props.type="header"', function() {
        const renderedContainer = renderContainer({ type: 'header' });
        expect(renderedContainer.type).toBe('header');
    });

    it('should render as a <footer /> tag when props.type="footer"', function() {
        const renderedContainer = renderContainer({ type: 'footer' });
        expect(renderedContainer.type).toBe('footer');
    });

    it('should render as a <section /> tag when props.type="section"', function() {
        const renderedContainer = renderContainer({ type: 'section' });
        expect(renderedContainer.type).toBe('section');
    });

    it('should have custom background-color when props.backgroundColor is defined', () => {
        const renderedContainer = renderContainer({ backgroundColor: '#990000' });
        expect(renderedContainer).toHaveStyleRule('background-color', '#990000');
    });

    it('should not have inner <div /> when props.inner={false}', () => {
        const renderedContainer = renderContainer({ inner: false, children: CONTAINER_CONTENT });
        expect(renderedContainer.children).toEqual([ CONTAINER_CONTENT ]);
    });

    it('should match snapshot', () => {
        const renderedContainer = TestRenderer.create(<Container>{CONTAINER_CONTENT}</Container>).toJSON();
        expect(renderedContainer).toMatchSnapshot();
    });

});

/**
 * Renders <Container /> with the given props
 * @param {Object} props - the props to render with
 * @return {Object} the renderedContainer component
 */
function renderContainer(props) {
    var { children = CONTAINER_CONTENT, ...rest } = props || {};
    return TestRenderer.create(<Container {...rest}>{children}</Container>).toJSON();
}
