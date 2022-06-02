import userReducer, {setUser, logout} from './userReducer';

const user = {
    email: "test@gmail.com",
    id: "23",
    avatar: "ea7d4ddd-7256-441e-abfe-6410fb3a32f1.jpg",
    diskSpace: 10737418240,
    usedSpace: 362010391
}

const defaultState =  {
    currentUser: user,
    isAuth: false
}

test('user should be added', () => {
    const action = setUser()
    const newState = userReducer(defaultState, action)

    expect(newState.isAuth).toBe(true)
})

test(` should get user's data`, () => {
    const action = setUser(user)
    const newState = userReducer(defaultState, action)

    expect(newState.currentUser.email).toBe("test@gmail.com")
    expect(newState.currentUser.id).toBe("23")
    expect(newState.currentUser.avatar).not.toBe("avatar")
})


test('user should be removed', () => {
    const action = logout()
    const newState = userReducer(defaultState, action)

    expect(newState.isAuth).toBe(false)
})