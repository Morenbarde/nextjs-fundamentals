

export async function GET() {
    return Response.json(
        { 
            die1 : Math.floor((Math.random() * 6) + 1),
            die2 : Math.floor((Math.random() * 6) + 1)
         }
    )
}