var important = false;
var fromVisible = true;
var icon;

function togglePriority() {
    console.log("Clicked!");

    if(important == true){
        icon.removeClass("fas").addClass("far");
        important = false;
    }else{
        icon.removeClass("far").addClass("fas");//No gain in performance though
        important = true;
    }
    
}

function toggleForm() {
    if(fromVisible){
        $(".section-form").hide();
        fromVisible = false;
    }else{
        $(".section-form").show();
        fromVisible = true;
    }
}

function saveTask() {
    console.log("Saved Task!");

    let title = $("#txtTitle").val();
    let dueDate = $("#txtDate").val();
    let description = $("#txtDescription").val();
    let status = $("#selStatus").val();
    let color = $("#selColor").val();
    let category = $("#selCategory").val();

    let theTask = new Task(important, title, dueDate, description, status, category, color);
    console.log(theTask);

    displayTask(theTask);
    clearForm();
}

function clearForm() {
    $("#txtTitle").val("");
    $("#txtDate").val("");
    $("#txtDescription").val("");
    $("#selStatus").val("");
    $("#selColor").val("");
    $("#selCategory").val("");
}

function displayTask(task){
    let syntax = `<div class="task">
        <i class="far fa-star"></i>

        <div class="info">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>

        <div class="details">
            <label class="status">${task.status}</label>
            <label class="category">${task.category}</label>
        </div>
    </div>`;

    $(".task-list").append(syntax);
}

function init(){
    console.log("Task Manager!!");
    icon = $("#iPriority");
    //Hook events
    icon.click(togglePriority);
    $("#btnShowDetails").click(toggleForm);
    $("#saveTask").click(saveTask);
    // load data

}

window.onload=init;

// button that hides and shows register task