    let todoArray=[];

    let editStatus=false;
    let  id=1;

    let users=[];

    //Complexity level
    let complex=[
        {
            type:"Easy",
        },
        {
            type:"Medium",
        },
        {
            type:"Hard",
        }];

    document.getElementById("complexity-type").innerHTML=complex.map((c)=>
    `<option>${c.type}</option>`
    );

    
    //Add
    const add=() =>{
    let title=document.getElementById("task-title").value;
    let description=document.getElementById("task-description").value;
    let assign=document.getElementById("user-assign").value;
    let complexity=document.getElementById("complexity-type").value;
    todoArray.push({
        id,
        title,
        description,
        assign,
        complexity,
    });
    id++;
    document.getElementById("task-title").value="";
    document.getElementById("task-description").value="";
    document.getElementById("user-assign").value="";
    display();

    };

    document.getElementById("edit-btn").innerHTML=
    editStatus==false
    ?
    `<button type="submit" id="submit-btn" onclick="{add()}">Add</button>`
    :
    `<button type="submit" id="submit-btn" onclick="{update()}">Update</button>`;

   //Edit
    const edit=(id)=>{
     editStatus=true;
    document.getElementById("edit-btn").innerHTML=
   editStatus=false ?
    `<button type="submit" id="submit-btn" onclick="{add()}">Add</button>`
    :
    `<button type="submit" id="submit-btn" onclick="{update(${id})}">Update</button>`
    let getValue = todoArray.filter((todos) => todos.id == id)[0];
    document.getElementById("task-title").value=getValue.title;
    document.getElementById("task-description").value=getValue.description;
    document.getElementById("user-assign").value=getValue.assign;
    document.getElementById("complexity-type").value=getValue.complexity; 
    };

    //Delete
    const deletee=(id)=>{
        todoArray=todoArray.filter(todos=>todos.id!=id);
        display();    
    };

   
     //Update
    const update=(id)=>{
        let title=document.getElementById("task-title").value;
        let description=document.getElementById("task-description").value;
        let assign=document.getElementById("user-assign").value;
        let complexity=document.getElementById("complexity-type").value;
        todoArray.map(todos=>{
            if(todos.id==id){
                todos.title=title,
                todos.description=description,
                todos.assign=assign,
                todos.complexity=complexity
            };

        });
        display();
    };


    //Display
    const display=()=>{
        document.getElementById("task").innerHTML = todoArray.map((todos)=>`
                <div class="todo-element">
                <div>Title:${todos.title}</div>
                <div>Description:${todos.description}</div>
                <div>Assign:${todos.assign}</div>
                <div>Complexity:${todos.complexity}</div>
                 <progress id="progress-bar${todos.complexity}" value="100">${todos.complex}</progress>
                    <div class="button-group">
                    <button class="btn" onClick="{edit(${todos.id})}">Edit</button>
                    <button class="btn" onClick="{deletee(${todos.id})}">Delete</button>
            </div>
    </div>
        `)
        .join("");
    };


