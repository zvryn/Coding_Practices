// สร้าง To-Do List (พื้นฐาน)
// โจทย์
// สร้าง To-Do List ด้วย JavaScript (ไม่ต้องมี UI) ที่สามารถ:
//
// เพิ่ม task
// ลบ task
// แสดง task ทั้งหมด
//
// addTask("Learn JavaScript");
// addTask("Build a project");
// removeTask(1); // ลบ task อันดับ 1
// showTasks();
// // Output:
// // 1. Learn JavaScript

let toDoList = [];

const addTask = (task) => {
  let checkTask = typeof task;
  if (checkTask == "string") {
    toDoList.push(task);
  }
};

const showTasks = () => {
  toDoList.map((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
};

const removeTask = (number) => {
  const newToDo = [];
  toDoList.map((item, index) => {
    if (index + 1 != number) {
      newToDo.push(item);
    }
  });
  toDoList = [...newToDo];
  return toDoList;
};

addTask("Learn JavaScript");
addTask("Learn Python");
addTask("Learn React");
addTask("Learn Next");

removeTask(3);
showTasks();
