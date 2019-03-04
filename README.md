# topics-manager

App for choosing subjects and signing up as trainers for workshops

## Requirements

* Authentication by GitHub
* Use Firebase as persistence
    + Store only the minimum values

## TODO List

* [ ] IT Project goodies
    + [x] Setup reset.css <https://github.com/warsawjs/topics-manager/pull/2/>
    + [x] Setup ESLint <https://github.com/warsawjs/topics-manager/pull/5/>
    + [x] Setup Pretier <https://github.com/warsawjs/topics-manager/pull/21>
    + [x] Setup Husky <https://github.com/warsawjs/topics-manager/pull/5/>
    + [x] Setup lint-staged <https://github.com/warsawjs/topics-manager/pull/5/>
    + [ ] Setup i18n

* [ ] Design
    + [x] Add font Lato <https://github.com/warsawjs/topics-manager/pull/9/>
    + [x] Add SVG Piechart lib <https://github.com/warsawjs/topics-manager/pull/24/>

* [ ] List view of all workshop proposals
    + [x] Display the main list component
    + [ ] Toggle between compact and broad

* [ ] Component of workshop proposal (single element)
    + [x] Display subject of the workshop
    + [ ] Display list of trainers who want to join
    + [x] Highlighting of the autor (first trainer)
    + [x] Add button Voting - for the community
        - [ ] Add protection from multiple votes
        - [ ] Add protection from multiple signups by one trainer
    + [x] Add button Join as trainer <https://github.com/warsawjs/topics-manager/pull/30/>
    + [x] Add button Leave as trainer <https://github.com/warsawjs/topics-manager/pull/30/>
    + [ ] Display numbers on pie chart <https://github.com/warsawjs/topics-manager/pull/30/>
    + [ ] Highlight the workshop when we have:
        - [ ] min. 3 trainers
        - [ ] min. 40 likes or members

* [x] From to adding a new subject
    + [x] View for a signup user
    + [x] Reset after issue of the form
    + [x] Saving form data
    + [ ] Edition of the saved subjects

* [ ] Showing the basic data about the signed up trainers
    + [x] Add authorization via GitHub
    + [x] Sign in
    + [x] Logout

## Vendors

* `redux-observable` > 1.0.0 does not support rxjs v6 or redux 4
* `redux-observable` prior to 1.0.0 does not support redux < 4
* `redux-observable` will support redux 4 soon hopefully
    + https://github.com/redux-observable/redux-observable/issues/478
    + https://github.com/redux-observable/redux-observable/pull/501
