import { writeFile } from 'fs/promises'
import todos from '../../todos.json'
export function GET(request){
    // console.log(request)
    return  Response.json(todos)
}
export async function POST(request){
    const todo = await request.json()
    const newTodo = {
        id: crypto.randomUUID(),
        text: todo.text,
        completed: false
    }
    todos.push(newTodo);
    await writeFile('todos.json', JSON.stringify(todos, null, 2))
    return Response.json(newTodo,{
        status: 201
    })
}