export default function Button ({title}){
    const btnStyles = {
        textTransform: 'capitalize',
        padding: '.7rem 1.5rem',
        border: 'none',
        borderRadius: '50px',
        backgroundColor: '#1D9BF0',
        color: 'white',
        fontSize: '1rem'
    }
    return(
        <button classeName="button" style={btnStyles}>{title}</button>
    )
}