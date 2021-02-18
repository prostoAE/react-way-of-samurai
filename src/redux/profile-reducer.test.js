import profileReducer, {addPostActionCreatot, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 3},
        {id: 3, message: 'First message', likesCount: 0},
        {id: 4, message: 'Bla bla', likesCount: 1},
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreatot('test-reducer.com');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreatot('test-reducer.com');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe('test-reducer.com');
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('after deleting length shouldn`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});


