import {useReducer} from "react"
export default function  Cricket() {
    const total_overs = 20;
    const team_name  = "System"


    const reducer = (state, action)=>{
        switch (action.type) {
            case "Run":
                return {
                    runs : state.runs + action.run_in_ball, 
                    wickets : state.wickets,
                    balls_played : state.balls_played+1
                }
                break;

            case "Wide":
                return {
                    runs : state.runs + 1, 
                    wickets : state.wickets,
                    balls_played : state.balls_played
                }
                break;

            case "Wicket":
                return {
                    runs: state.runs , 
                    wickets : state.wickets+1,
                    balls_played : state.balls_played+1
                }
                break;

            case "Reset":
                return {runs : 0, wickets : 0, balls_played : 0}
                break;

            default:
                return state
                break;
        }
    }

    const [data, dispatch] = useReducer(reducer, { runs : 0, wickets : 0, balls_played : 0 })

    const overs_done = Math.floor(data.balls_played/6);
    const ball_count_current = data.balls_played % 6;
    const game_over = data.balls_played/6 >= total_overs || data.wickets=== 10;


    const container_style = {
        backgroundColor : "blue",
        color : "white",
        display : "flex",
        justifyContent : "center",
        alignItems: "center",
        flexDirection : "column",
        gap : "20px",
        padding : "20px"
        }

    const wicket_style = {color:"lightgreen", fontSize : "30px"}
    const team_style = {color : "red", fontSize : "20px"}
    const button_container_style = {display : "flex", gap: "10px"}
    const wicket_button_style={color : "white", backgroundColor : "red"}
    const final_wicket_style = game_over
    ? { ...wicket_button_style, backgroundColor: "#cccccc", cursor: "not-allowed", opacity : "0.4" } 
    : wicket_button_style;
    const reset_button_style={color : "white", backgroundColor : "gray"}



    return (
    <div style={container_style}>
        <div style={team_style}>Team: {team_name}</div>
        <div> Overs: {overs_done}.{ball_count_current}</div>
        <div style={wicket_style}> Score: {data.runs}/{data.wickets}</div>



        <div style={button_container_style}>


        {[0,1,2,3,4,5,6].map(run=>{
            return <button key={run} disabled={game_over}  onClick={()=>dispatch({type : "Run", run_in_ball  : run})}>
            {run} {run <=1 ? "run" : "runs"}
            </button>
        })}
        </div>

        <button onClick={()=>dispatch({type : "Wide"})} disabled={game_over}>
             Wide ball
        </button>

        <button onClick={()=>dispatch({type : "Wicket"})} disabled={game_over} style={final_wicket_style}>
             Wicket
        </button>

          <button onClick={()=>dispatch({type : "Reset"})} style={reset_button_style} >
             Reset
        </button>

        </div>
    )
    
}