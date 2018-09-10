import { EventEmitter } from 'fbemitter';
import firebase from 'firebase';
import 'firebase/database';
import { Topic } from '../models/topic';

const config = {
    apiKey: 'AIzaSyC0LpDu_Vi8gHMmjGR2gAUH-aQNy1bIEDI',
    authDomain: 'topics-manager-a013b.firebaseapp.com',
    databaseURL: 'https://topics-manager-a013b.firebaseio.com',
    projectId: 'topics-manager-a013b',
    storageBucket: '',
    messagingSenderId: '198055151161',
};

// eslint-disable-next-line no-undef
const app = firebase.initializeApp(config);
const db = app.database();
const refA = db.ref('topics');

enum FirebaseEvents {
    TOPIC_ADDED_EVENT = 'topic-added',
}

export type CallbackFunction = (
    type: FirebaseEvents,
    topic: Topic[]
) => undefined;

export default class FirebaseService {
    public static listenOnTopicAdded(callback: CallbackFunction) {
        if (!this.listening) {
            this.listening = true;
            refA.on('value', snapshot => {
                const topics: Topic[] = Object.entries(snapshot.val()).map(
                    el => ({
                        id: el[0], // Object.entries returns obj like { '0': key, '1': value }
                        ...(el[1] as Topic), // so append all 'value's props directly there
                    })
                );
                this.emitter.emit(FirebaseEvents.TOPIC_ADDED_EVENT, topics);
            });
        }

        this.emitter.addListener(FirebaseEvents.TOPIC_ADDED_EVENT, callback);
    }

    public static removeAllListeners() {
        this.emitter.removeAllListeners();
    }

    private static emitter = new EventEmitter();
    private static listening = false;
}

export { db };
