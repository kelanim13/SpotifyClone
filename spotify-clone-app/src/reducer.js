export const initialState = {
    user: null,
    playlists: [], 
    playing: false,
    item: null,
    //remove after finished developing
    //token: 'BQCG3Fb4V5lIZCxCstowicetFgIZllSZUu8gTn3EYI63vIan3K…GHiWiWeV4m2VXdVukzg0xvTfc_vfTjKrwhfsMzV8_zzcjVTBg',
};

const reducer = (state, action) => {
//debugging tool
console.log(action);
    
    //Action -> type, [payload - i.e. user]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item
            };
        default: 
            return state; 
    }
};

export default reducer; 