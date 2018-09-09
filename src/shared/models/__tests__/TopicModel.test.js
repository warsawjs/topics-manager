import Topic from '../topic';

describe('Topic', () => {

    describe('object creation from backend data', () => {
        const topic = TopicModel.fromBackendData({
            title: 'someTitle',
            description: 'someDescription'
        });

        it('should have title', () => {
            expect(topic.title).toBe('someTitle');
        });

        it('should have description', () => {
            expect(topic.description).toBe('someDescription');
        });
    });

    describe('object creation from empty source', () => {

        const topic = TopicModel.fromBackendData({});

        it('should have no title if empty source provided', () => {
            expect(topic).not.toHaveProperty('title');
        });

        it('should have no description if empty source provided', () => {
            expect(topic).not.toHaveProperty('description');
        });
    });

});
