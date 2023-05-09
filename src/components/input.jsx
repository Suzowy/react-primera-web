const Input = ({text,changeText})=>{
    const handleInput = (event) => {
        changeText(event.target.value)
    }
    return (
        <input type="text" onChange={handleInput} />
    )
}

export default Input