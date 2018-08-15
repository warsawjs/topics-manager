import { EventEmitter } from 'fbemitter';
import TopicModel from '../models/TopicModel';
import firebase from 'firebase';
import 'firebase/database';

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

const TOPIC_ADDED_EVENT = 'topic-added';

export default class FirebaseService {
    static emitter = new EventEmitter();
    static listening = false;

    static listenOnTopicAdded(callback) {
        if (!this.listening) {
            this.listening = true;
            refA.on('value', snapshot => {
                const topics = Object.entries(snapshot.val()).map(el =>
                    TopicModel.fromBackendData({
                        id: el[0], //Object.entries returns obj like { '0': key, '1': value }
                        ...el[1], //so append all 'value's props directly there
                    })
                );
                this.emitter.emit(TOPIC_ADDED_EVENT, topics);
            });
        }

        this.emitter.addListener(TOPIC_ADDED_EVENT, callback);
    }

    static removeAllListeners() {
        this.emitter.removeAllListeners();
    }
}

export { db };
