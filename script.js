let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inputNewTask = $('#inputNewTask')

function addItem() {
    let listItem = $('<li>',{
        'class': 'list-group-item',
        text: inputNewTask.val()
    })

    listItem.click(() => {
        (listItem).toggleClass('done')
    })

    // console.log(inputNewTask.val())
    ulTasks.append(listItem)
    inputNewTask.val("")
    //toggleInputButtons()
}

function cleanupDone() {
    $('#ulTasks .done').remove()
    //toggleInputButtons()
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
    //toggleInputButtons()
}

function toggleInputButtons() {
    btnClear.prop('disabled', inputNewTask.val() == '')
    btnAdd.prop('disabled', inputNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
  }
  

inputNewTask.keypress((e) => {
    if(e.which==13) addItem()
})

btnAdd.click(addItem)

btnClear.click(() => {
    inputNewTask.val('')
    //toggleInputButtons()
})

btnCleanup.click(cleanupDone)

btnSort.click(sortTasks)