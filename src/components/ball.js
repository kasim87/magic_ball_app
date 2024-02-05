function Ball(props){
    return(
        <button onClick={props.handleFunc}>
            <img src={require(`../assets/ball${props.imgNum}.png`)}></img>
        </button>
    )
}

export default Ball;