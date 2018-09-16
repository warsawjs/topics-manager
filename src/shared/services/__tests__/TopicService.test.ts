import {
    topic as topicFactory,
    topicMetadata,
    user,
} from '../../../../test-utils/user-factory';
import {
    ALREADY_ATTENDING,
    ALREADY_AUTHOR,
    ALREADY_TRAINER, throwIfCannotAttend,
} from '../topic-service';

const emailOne = 'john1@doe.com';
const emailTwo = 'john2@doe.com';

describe('TopicService', () => {
    describe('when trying to attend the topic', () => {
        let author;
        let member;
        let topic;

        beforeEach(() => {
            author = user({ email: emailOne });
        });

        describe('when user is an author at the same time', () => {
            beforeEach(() => {
                topic = topicMetadata({ author });
            });

            it('should reject the request', async () => {
                await expect(
                    throwIfCannotAttend(topic, author)
                ).rejects.toEqual(ALREADY_AUTHOR);
            });
        });

        describe('when user is a trainer at the same time', () => {
            beforeEach(() => {
                member = user({
                    email: emailTwo,
                });
                topic = topicFactory({
                    author,
                    trainers: [member],
                });
            });

            it('should reject the request', async () => {
                await expect(
                    throwIfCannotAttend(topic, member)
                ).rejects.toEqual(ALREADY_TRAINER);
            });
        });

        describe('when user is already a member', () => {
            beforeEach(() => {
                member = user({
                    email: emailTwo,
                });
                topic = topicFactory({
                    author,
                    trainers: [],
                    members: [member],
                });
            });

            it('should reject the request', async () => {
                await expect(
                    throwIfCannotAttend(topic, member)
                ).rejects.toEqual(ALREADY_ATTENDING);
            });
        });
    });
});
