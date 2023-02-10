import spinner from './spinner.gif'
function Spinner(){
    return(
        <div className='w-100 d-flex align-items-center justify-content-center mb-4'><img style={{width:'50px'}} src={spinner} alt={spinner}></img></div>
    )
}
export default Spinner;