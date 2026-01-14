import comicsArray from "../data/comics"
import ComicCard from "./ComicCard"

const ComicsList = () => {

    return <>
        <h2>Current Series</h2>

        <div id="card-container">

            {comicsArray.map(fumetto => {

                return <ComicCard img={fumetto.thumb} title={fumetto.title}  key={fumetto.id} />

               })}


        </div >
    </>

}


export default ComicsList;