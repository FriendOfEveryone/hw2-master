const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeType): typeof initState=> { // fix any
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID': {
                const newState = {...state, themeId: action.id}
                return newState
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any

type ChangeThemeType = ReturnType<typeof changeThemeId>