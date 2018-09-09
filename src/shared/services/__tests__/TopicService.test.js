import { GithubUser } from '../../models/github-user';
import Topic from '../../models/topic';
import TopicService, {
    ALREADY_ATTENDING,
    ALREADY_AUTHOR,
    ALREADY_TRAINER,
} from '../TopicService';

const emailOne = 'john1@doe.com';
const emailTwo = 'john2@doe.com';

describe('TopicService', () => {
    describe('when trying to attend the topic', () => {
        let author, member, topic;

        beforeEach(() => {
            author = GithubUser.fromBackend({
                email: emailOne,
            });
        });

        describe('when user is an author at the same time', () => {
            beforeEach(() => {
                topic = TopicModel.fromBackendData({
                    author,
                });
            });

            it('should reject the request', async () => {
                await expect(
                    TopicService.throwIfCannotAttend(topic, author)
                ).rejects.toEqual(ALREADY_AUTHOR);
            });
        });

        describe('when user is a trainer at the same time', () => {
            beforeEach(() => {
                member = GithubUser.fromBackend({
                    email: emailTwo,
                });
                topic = TopicModel.fromBackendData({
                    author,
                    trainers: [member],
                });
            });

            it('should reject the request', async () => {
                await expect(
                    TopicService.throwIfCannotAttend(topic, member)
                ).rejects.toEqual(ALREADY_TRAINER);
            });
        });

        describe('when user is already a member', () => {
            beforeEach(() => {
                member = GithubUser.fromBackend({
                    email: emailTwo,
                });
                topic = TopicModel.fromBackendData({
                    author,
                    trainers: [],
                    members: [member],
                });
            });

            it('should reject the request', async () => {
                await expect(
                    TopicService.throwIfCannotAttend(topic, member)
                ).rejects.toEqual(ALREADY_ATTENDING);
            });
        });
    });
});
