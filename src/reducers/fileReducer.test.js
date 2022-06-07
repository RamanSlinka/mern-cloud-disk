import fileReducer, {
    setFiles, setCurrentDir,
    addFile, setFileView, deleteFileAction,
     setPopupDisplay
} from "./fileReducer";

const folder = {
    childs: [],
    date: "2022-05-02",
    name: "folder",
    path: "folder",
    size: 0,
    type: "dir",
    user: "9dd",
    __v: 0,
    _id: "b709"
}

const file = {
    childs: [],
    date: "2022-05-10",
    name: "test work.docx",
    path: "test work.docx",
    size: 18963,
    type: "docx",
    user: "626_user",
    __v: 0,
    _id: "62ad2"
};
const newFile = {
    childs: [],
    date: "2022-05-05",
    name: "worker.docx",
    path: "worker.docx",
    size: 63,
    type: "docx",
    user: "007_user",
    __v: 0,
    _id: "33ad22"
};

const files = [file]

const defaultState = {
    files: files,
    currentDir: null,
    popupDisplay: 'none',
    dirStack: [],
    view: 'list'
}

test('files should be visible', () => {
    let action = setFiles(files)
    let newState = fileReducer(defaultState, action)

    expect(newState.files[0].user).toBe('626_user')
    expect(newState.files.length).toBe(1)
})

test('folder should be visible', () => {
    let action = setCurrentDir(folder)
    let newState = fileReducer(defaultState, action)

    expect(newState.currentDir.name).toBe('folder')
});

test('file should be added', () => {
    let action = addFile(newFile)
    let newState = fileReducer(defaultState, action)

    expect(newState.files.length).toBe(2)
    expect(newState.files.length).not.toBe(3)
    expect(newState.files[1].user).toBe('007_user')
    expect(newState.files[0].user).toBe('626_user')
});

test('file should be remove', () => {
    let action = deleteFileAction(file._id)
    let newState = fileReducer(defaultState, action)

    expect(newState.files.length).toBe(0)
    expect(newState.files[0]).toBe(undefined)
});

test('popup should be visible', () => {
    let action = setPopupDisplay('flex')
    let newState = fileReducer(defaultState, action)

    expect(newState.popupDisplay).toBe('flex')
    expect(newState.popupDisplay).not.toBe('none')
});

test('files should be in a stack on the display', () => {
    let action = setFileView('plate')
    let newState = fileReducer(defaultState, action)

    expect(newState.view).toBe('plate')
    expect(newState.view).not.toBe('list')
});