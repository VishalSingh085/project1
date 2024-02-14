var count = 0;
var editingflag = -1;
var filter = "Incomplete"
var todoArr = [

    {
        id: count++,
        text: "Todo-1",
        completed: false
    },
    {
        id: count++,
        text: "Todo-2",
        completed: true
    },
    {
        id: count++,
        text: "Todo-3",
        completed: false
    },
    {
        id: count++,
        text: "Todo-4",
        completed: false
    },
    {
        id: count++,
        text: "Todo-5",
        completed: true
    },
    {
        id: count++,
        text: "Todo-6",
        completed: false
    }


]

const updatefrontend = () => {
    var todolist = document.getElementById("todolist")
    todolist.innerHTML = ""

    todoArr.map(todotemp => {
        switch (filter) {
            case "Incomplete":
                if (!todotemp.completed) {
                    console.log(todotemp);
                    console.log(todotemp.completed);
                    let checkboxInput = ""
                    let texttodo = todotemp.text
                    if (todotemp.completed) {
                        checkboxInput = "<input type ='checkbox' checked onchange='onchackedchange(" + todotemp.id + ")'/>"
                        texttodo = "<s>" + texttodo + "</s>"
                    } else {
                        checkboxInput = "<input type ='checkbox' onchange='onchackedchange(" + todotemp.id + ")' />"
                    }
                    if (editingflag === todotemp.id) {
                        todolist.innerHTML = todolist.innerHTML +
                            "<li id='listelementstyle'>" + checkboxInput +
                            (todotemp.completed ? "" :
                                "<input id=\"todoedit\" type =\"text\"value=" + todotemp.text + "/>" +
                                "<button onclick=deletetodo(" + todotemp.id + ")> Delete </button> " + "<button onclick=saveeditedtodo(" + todotemp.id + ")> Save</button>" + "</li>"
                            )
                    } else {

                        todolist.innerHTML = todolist.innerHTML
                            + "<li id='listelementstyle'>" + checkboxInput + texttodo +
                            (todotemp.completed ? "" :
                                "<button onclick=deletetodo(" + todotemp.id + ")> Delete </button>" + "<button onclick=edittodo(" + todotemp.id + ")> Edit</button>" + "</li>"
                            )
                    }
                }
                break;

            case "Completed":
                if (todotemp.completed) {
                    console.log(todotemp);
                    console.log(todotemp.completed);
                    let checkboxInput = ""
                    let texttodo = todotemp.text
                    let listelementstyle = "listelementstyle"
                    if (todotemp.completed) {
                        checkboxInput = "<input type ='checkbox' checked onchange='onchackedchange(" + todotemp.id + ")'/>"
                        texttodo = "<s>" + texttodo + "</s>"
                        listelementstyle = "listelementstylecompleted"
                    } else {
                        checkboxInput = "<input type ='checkbox' onchange='onchackedchange(" + todotemp.id + ")' />"
                        listelementstyle = "listelementstyle"
                    }
                    if (editingflag === todotemp.id) {
                        todolist.innerHTML = todolist.innerHTML +
                            "<li id=" + listelementstyle + ">" + checkboxInput +
                            (todotemp.completed ? "" :
                                "<input id=\"todoedit\" type =\"text\"value=" + todotemp.text + "/>" +
                                "<button onclick=deletetodo(" + todotemp.id + ")> Delete </button> " + "<button onclick=saveeditedtodo(" + todotemp.id + ")> Save</button>" + "</li>"
                            )
                    } else {

                        todolist.innerHTML = todolist.innerHTML
                            + "<li id=" + listelementstyle + ">" + checkboxInput + texttodo +
                            (todotemp.completed ? "" :
                                "<button onclick=deletetodo(" + todotemp.id + ")> Delete </button>" + "<button onclick=edittodo(" + todotemp.id + ")> Edit</button>" + "</li>"
                            )
                    }

                }
                break;
            case "All":
                console.log(todotemp);
                console.log(todotemp.completed);
                let checkboxInput = ""
                let texttodo = todotemp.text
                if (todotemp.completed) {
                    checkboxInput = "<input type ='checkbox' checked onchange='onchackedchange(" + todotemp.id + ")'/>"
                    texttodo = "<s>" + texttodo + "</s>"
                } else {
                    checkboxInput = "<input type ='checkbox' onchange='onchackedchange(" + todotemp.id + ")' />"
                }
                if (editingflag === todotemp.id) {
                    todolist.innerHTML = todolist.innerHTML +
                        "<li id='listelementstyle'>" + checkboxInput +
                        (todotemp.completed ? "" :
                            "<input id=\"todoedit\" type =\"text\"value=" + todotemp.text + "/>" +
                            "<button onclick=deletetodo(" + todotemp.id + ")> Delete </button> " + "<button onclick=saveeditedtodo(" + todotemp.id + ")> Save</button>" + "</li>"
                        )
                } else {

                    todolist.innerHTML = todolist.innerHTML
                        + "<li id='listelementstyle'>" + checkboxInput + texttodo +
                        (todotemp.completed ? "" :
                            "<button onclick=deletetodo(" + todotemp.id + ")> Delete </button>" + "<button onclick=edittodo(" + todotemp.id + ")> Edit</button>" + "</li>"
                        )
                }

                break;
            default:

        }
        //   console.log(todotemp);
        //   console.log(todotemp.completed);
        //   let checkboxInput =""
        //   let texttodo = todotemp.text
        //   if (todotemp.completed) {
        //     checkboxInput ="<input type ='checkbox' checked onchange='onchackedchange("+todotemp.id+")'/>"
        //      texttodo ="<s>"+texttodo+"</s>"
        //   }else{
        //     checkboxInput ="<input type ='checkbox' onchange='onchackedchange("+todotemp.id+")' />"
        //   }
        //   if(editingflag === todotemp.id){
        //     todolist.innerHTML = todolist.innerHTML +
        //    "<li>"+checkboxInput+
        //     (todotemp.completed ? "":
        //     "<input id=\"todoedit\" type =\"text\"value="+todotemp.text+"/>"+
        //     "<button onclick=deletetodo("+todotemp.id+")> Delete </button> "+"<button onclick=saveeditedtodo("+todotemp.id+")> Save</button>"+"</li>"
        //     )
        //   }else{

        //    todolist.innerHTML =  todolist.innerHTML 
        //    +"<li>"+checkboxInput+texttodo+
        //     (todotemp.completed ? "" :
        //     "<button onclick=deletetodo("+todotemp.id+")> Delete </button>"+"<button onclick=edittodo("+todotemp.id+")> Edit</button>"+"</li>"
        // )}

        return todotemp
    })
}
const saveeditedtodo = (id) => {
    console.log(id);
    todoArr = todoArr.map(todotemp => {
        if (id === todotemp.id) {
            todotemp.text = document.getElementById("todoedit").value
            return todotemp
        }
        else {
            return todotemp
        }
    })
    editingflag = -1
    updatefrontend()
}

const edittodo = (id => {
    console.log(id);
    editingflag = id
    updatefrontend()
})

const addtodo = (temptodo) => {
    let todotext = document.getElementById("todoinput").value;
    if (todotext === '') {
        alert("Todo cant be blank , please entersomething");
    }
    else {
        console.log(todoArr);
        todoArr.push({
            id: count++,
            text: todotext,
            completed: false
        }
        );
        console.log(todoArr);
        document.getElementById("todoinput").value = "";
        //updating list on frontend
        updatefrontend()
    }
}

const deletetodo = (id) => {
    console.log("id" + id);
    //filter is used to delete filter element
    todoArr = todoArr.filter(temptodo => {
        if (id === temptodo.id) {
            return false;
        } else {
            return true;
        }
    })
    updatefrontend();
}
const onchackedchange = (id) => {
    console.log("onchackedchange" + id);
    //data update
    todoArr = todoArr.map(todotemp => {
        if (id === todotemp.id) {
            todotemp.completed = !todotemp.completed
        }
        return todotemp
    })
    updatefrontend()
    //updatefrontend
}

const filtertodo = (filteraction) => {
    console.log("filtertodo" + filteraction);
    filter = filteraction
    updatefrontend()
}
