import comicsArray from "../Data/comics"

const ComicsList = () => {

    return <>
        <h2>Current Series</h2>

        {comicsArray.map(fumetto => {
            return <div>{fumetto.title}
            <img src={fumetto.thumb} alt="img" />
            
            
            </div>
        })}
    </>
         
}


export default ComicsList;