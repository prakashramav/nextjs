import todosData from '../../todos.json'
export function GET(){
    return  Response.json(todosData)
}