import userReducer, {setUser, logout} from './userReducer';

const defaultState =  {
    currentUser: {},
    isAuth: false
}

test('user should be added', () => {
    let action = setUser()
    const newState = userReducer(defaultState, action)

    expect(newState.isAuth).toBe(true)
})
test('user should be removed', () => {
    let action = logout()
    const newState = userReducer(defaultState, action)

    expect(newState.isAuth).toBe(false)
})