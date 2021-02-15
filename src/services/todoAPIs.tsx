let numberCalls = 0;

function uuid(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getStatus() {
  ++numberCalls;
  if (numberCalls%5 === 0)
    return 'Bad Request'
  else
    return 'ok'
}
export async function fetchTodosAPI(): Promise<any> {
  return {
    status: getStatus(),
    data: [ 
      { id: uuid(), text: "Eat", complete: false },
      { id: uuid(), text: "Play", complete: true },
      { id: uuid(), text: "Love", complete: false },
      { id: uuid(), text: "Sleep", complete: false },
    ]
  }
}

export async function deleteTodoAPI(id: string): Promise<any> {
  console.log('Deleting alert',id,'for current user')
  return { status: getStatus() };
}

export async function addTodoAPI(text: string): Promise<any> {
  return { status: getStatus(), todo: { id: uuid(), text: text, complete: false } };
}

export async function changeTodoAPI(todo: Todo): Promise<any> {
  return { status: getStatus(), todo };
}
