const $input = document.getElementById("input");
const $form = document.getElementById("form");
const $ul = document.getElementById("ul")

const $todos = JSON.parse(localStorage.getItem("todos"));
if($todos){
  $todos.forEach(todo=>{
    add(todo);
  });
  
}

$form.addEventListener("submit", function(e){
  e.preventDefault();
  add();
})

function add(todo){
  let SubmitText = $input.value ;
  if(todo){
    SubmitText = todo.data;
  }
  if(SubmitText){
  const $li = document.createElement("li");
  $li.classList.add("list-group-item");
  if(todo && todo.compreted){
    $li.classList.add("text-decoration-line-through");
  }
  $li.addEventListener("mouseover",function(){
    $li.classList.add("active");
  })
  $li.addEventListener("mouseout",function(){
    $li.classList.remove("active");
  })
  $li.addEventListener("click", function(){
    $li.classList.toggle("text-decoration-line-through");
    SaveData();
  })
  $li.addEventListener("contextmenu", function(e){
    e.preventDefault();
    $li.remove();
    SaveData();
  })

  $li.innerText = SubmitText;
  $ul.appendChild($li);
  SaveData();
  $input.value = "";
}
}

function SaveData(){
const $lists = document.querySelectorAll("li");
let todos =[];
$lists.forEach(todo => {
  let toob ={
    data:todo.innerText,
    compreted:todo.classList.contains("text-decoration-line-through")
  };
  todos.push(toob);
})
localStorage.setItem("todos",JSON.stringify(todos));
}