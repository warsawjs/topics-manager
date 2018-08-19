# topics-manager

## Contributing

We welcome your contributions! Each PR needs at least one approving review.

For CSS properties please use the following order:
Positioning > Display & Box Model > Color > Text > Other
Simply explained here: https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/


## Work plan

1. Add mock templates

    _Final graphics will be added later, to be coherent with new WarsawJS page layout_

2. Add basic components
3. Add sign up and sign in

    Requirements:

    - remember only the minimum: GitHub user.id | key and maybe votes
    - use OAuth 2.0 - using a library or without

## Features

### List view of all workshop proposals

- [x] the main list component
- [ ] toggle between compact and broad

### Show view

- [x] subject of the workshop
- [ ] list of trainers who want to join
- [x] highlighting of the autor (first trainer)

#### Buttons

- [x] Voting - for the community
- [ ] secure from multiple votes
- [ ] secure from multiple signups by one trainer
- [x] from for adding a new subject
    - [x] View for a signup user
    - [x] Reset after issue of the form
    - [x] Saving form data
    - [ ] Edition of the saved subjects
- [ ] Showing the basic data about the signed up trainers
    - [x] add authorization
    - [x] Use GitHub API integration or `hello.js`
    - [x] Sign in
    - [x] Logout

## Additional features :star:

- [ ] Highlight the workshop when we have:
    - [ ] min. 3 trainers
    - [ ] min. 40 likes or members

### Components

1. TopBar
    - login / logout button

2. Form
    - title
    - input
    - text input
    - button (reuse login) - send

3. WorkshopsList
4. Workshop
    - trainersList
    - trainer
    - voteCounter
    - workshopDescription
    - “I want” button

5. PastWorkshops
    - Same components


# libraries
* redux-observable > 1.0.0 doess not support rxjs v6 or redux 4
* redux-observable prior to 1.0.0 does not support redux < 4
* redux-observable will support redux 4 soon hopefully https://github.com/redux-observable/redux-observable/issues/478 https://github.com/redux-observable/redux-observable/pull/501
