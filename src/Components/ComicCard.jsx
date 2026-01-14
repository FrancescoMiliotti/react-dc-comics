const ComicCard = (props) => {

const img = props.img;
const title = props.title;


return <div className="comics-card">
    <img src={img} alt="img" />
    <h3>{title}</h3>
    </div>


}



export default ComicCard

