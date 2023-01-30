const button = document.querySelector('button')

const tasks = document.querySelector('#tasks')

let inputTag = document.querySelector('input')

const deleteIcon = document.querySelector('.delete-icon')

const deleteIcon2 = document.querySelector('.delete-icon2')

const sortIcon = document.querySelector('.sort-icon')




let inputs;
let taskArr;
let actions;
let reverseInputs;
let sortInputs;


function createTask() {
    //создание элэментов

    if (inputTag.value.trim()) {

        inputTag.value = inputTag.value.trim()

        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task')
        tasks.appendChild(taskDiv)

        const input = document.createElement('input')
        input.classList.add('taskname')
        input.setAttribute('type', 'text')
        input.setAttribute('value', `${inputTag.value}`)
        taskDiv.appendChild(input)
        const tasDiv2 = document.createElement('div')
        tasDiv2.classList.add('actions')
        taskDiv.appendChild(tasDiv2)
        const newDiv = document.createElement('div')
        const icon = document.createElement('span')
        icon.classList.add('delete-icon3')
        icon.textContent = 'x'
        newDiv.classList.add('delete')
        tasDiv2.appendChild(newDiv)
        newDiv.appendChild(icon)

    }


    inputTag.value = " "


    const deleteImg = document.querySelectorAll('.delete')
    const task = document.querySelectorAll('.task')



    taskArr = document.querySelectorAll('.task')


    //Удаления 
    deleteImg.forEach((img, index) => {

        img.addEventListener('click', () => {
            task[index].remove()
            taskArr = document.querySelectorAll('.task')

        })




        taskArr = document.querySelectorAll('.task')
        inputs = document.querySelectorAll('.taskname')
        sortInputs = [].slice.call(inputs).sort(function (a, b) {
            if (isNaN(a.value / 2) && isNaN(b.value / 2)) {
                return a.value > b.value ? 1 : -1;
            } else {
                return Number(a.value) > Number(b.value) ? 1 : -1;
            }

        });

        reverseInputs = sortInputs.reverse()



    })

    inputs = document.querySelectorAll('.taskname')

    actions = document.querySelectorAll('.actions')

}

button.addEventListener('click', createTask)

inputTag.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        createTask()
    }
})




deleteIcon.addEventListener('click', () => {
    inputTag.value = " "
})





sortIcon.addEventListener('click', () => {
    sortIcon.setAttribute('src', '/icons/Group 73.png')


    inputs = document.querySelectorAll('.taskname')




    sortInputs = [].slice.call(inputs).sort(function (a, b) {
        if (isNaN(a.value / 2) && isNaN(b.value / 2)) {
            return a.value > b.value ? 1 : -1;
        } else {
            return Number(a.value) > Number(b.value) ? 1 : -1;
        }

    });





    taskArr.forEach((elem, index) => {
        elem.insertBefore(sortInputs[index], elem.lastChild)

    })

    sortIcon.addEventListener('click', () => {
        sortIcon.setAttribute('src', '/icons/Group 91.png')
        inputs = document.querySelectorAll('.taskname')
        reverseInputs = sortInputs.reverse()

        taskArr.forEach((elem, index) => {
            elem.insertBefore(reverseInputs[index], elem.lastChild)

        })

    })


})










