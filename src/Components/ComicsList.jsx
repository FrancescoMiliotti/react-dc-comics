import comicsArray from "../data/comics"

const ComicsList = () => {

    return <>
        <h2>Current Series</h2>

        <div id="card-container">

            {comicsArray.map(fumetto => {
                return <div className="comics-card" key={fumetto.id}> 
                    
                    <img src={fumetto.thumb} alt="img" />
                    <h3>{fumetto.title}</h3>


                </div>
            })}


        </div >
    </>

}


export default ComicsList;