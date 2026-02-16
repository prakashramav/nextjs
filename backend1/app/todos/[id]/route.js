import todosData from '../../../todos.json'

export async function GET(_, {params}){
    const {id} = await params
    // console.log(a);
    const todo = todosData.find((todo) => id === todo.id.toString())
    // console.log(context);
    if(!todo){
        return Response.json({error: "Todo not found"},{
            status: 404
        })
    }
    return Response.json(todo)
}