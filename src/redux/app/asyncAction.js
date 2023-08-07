const { applyMiddleware, createStore } = require("redux")

// initial Sate
const initialSate = {
    loading: false,
    posts: [],
    error: ' '
}

const fetchPostsRequested = () => {
    return {
        type: 'posts/requested',
    }
}


const fetchPostsSucceeded = (posts) => {
    return {
        type: 'posts/succeeded',
    }
}


const fetchPostsFailed = (error) => {
    return {
        type: 'posts/failed',
    }
}

// reducer 

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'posts/requested':
            return {
                ...state,
                loading: true,
                error: ''
            }

        case 'posts/succeeded':
            return {
                ...state,
                loading: false,
                error: '',
                posts: action.payload
            };

        case 'posts/failed':
                return {
                    ...state,
                    loading: false,
                    error: action.payload.messsage,
                    posts: []
                }
            default:
                break
    }
}



// Thunk function
const fetchPosts = () => async dispatch => {
    
    dispatch(fetchPostsRequested());

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(fetchPostsSucceeded(response.data)); // Corrected here

    } catch (err) {
        dispatch(fetchPostsFailed(err));
    }
};


