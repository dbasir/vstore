import React,{ useState } from 'react';
import Header from "./Header";
import Footer from './Footer'
import { useHistory } from "react-router-dom";
  
const SelectedMovie = (props) => {
    const history = useHistory();
    const[marvelmovies,setArr]=useState({
        marvel_title:props.title,
        marvel_price:props.price,
        marvel_synopsis:props.synopsis,
        marvel_tag:props.tag,
        marvel_small_poster:props.smallPoster,
        marvel_large_poster:props.largePoster,
        marvel_rent:props.rent,
        marvel_purchase_outright:props.purchase,
        marvel_featured:props.featured,
        marvel_description:props.describe,
    })
    const submitform=(e)=>{
        
        console.log(marvelmovies);
        e.preventDefault();
        fetch("http://localhost:5002/marvelmovies/"+props.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(marvelmovies)
        })
      .then((res) =>res.json())
      .then(data => {
        alert(`Movie: ${marvelmovies.marvel_title} is updated successfully!!!`);
        setShowResults(false)
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })
    }
    const [showResults, setShowResults] = useState(false)
    const onClick = () => {
        if(showResults===true){setShowResults(false)}
        if(showResults===false){setShowResults(true)}
        
    }
     const Results = () => (
      
    <div id="results" className="search-results">
         <form action="/" method="PUT" onSubmit={submitform}>
                    <div class="form-group">
                        <label for="email">Title:</label>
                        <input type="text" class="form-control" id="title" placeholder="Title" value={marvelmovies.marvel_title} name="title" onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_title:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Price:</label>
                        <input type="text" class="form-control" id="price" placeholder="Price" value={marvelmovies.marvel_price} name="price" onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_price:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Synopsis:</label>
                        <input type="text" class="form-control" id="synopsis" placeholder="Synopsis" value={marvelmovies.marvel_synopsis} name="synopsis" onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_synopsis :event.target.value
                            })
                        }} />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Tag:</label>
                        <input type="text" class="form-control" id="tag" placeholder="Tag" value={marvelmovies.marvel_tag} name="tag" onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_tag:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Small Poster Path:</label>
                        <input type="text" class="form-control" id="smallposter" placeholder="Small Poster Path" value={marvelmovies.marvel_small_poster} name="smallposter" onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_small_poster:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Large Poster Path:</label>
                        <input type="text" class="form-control" id="largeposter" placeholder="Large Poster Path" value={marvelmovies.marvel_large_poster} name="largeposter" onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_large_poster:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Rent:</label>
                        <input type="text" class="form-control" id="rent" placeholder="Rent" name="rent" value={marvelmovies.marvel_rent} onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_rent:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Purchase Outright:</label>
                        <input type="text" class="form-control" id="purchase" placeholder="Purchase Outright" value={marvelmovies.marvel_purchase_outright} name="purchase" onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_purchase_outright:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Featured:</label>
                        <input type="text" class="form-control" id="featured" placeholder="Featured" value={marvelmovies.marvel_featured} name="featured" onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_featured:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Description:</label>
                        <textarea  type="text" class="form-control" id="description" placeholder="Description" value={marvelmovies.marvel_description} name="description" rows="4" cols="50" onChange={event=>{
                            setArr({
                                ...marvelmovies,
                                marvel_description:event.target.value
                            })
                        }}/>
                    </div>

                    
                    <button type="submit" class="btn btn-default">Update Movie</button>
                </form>
           
    </div>
  ) 

    return (
        <div id="container">
            <Header />
            <div class="container" id="cont">
                <h2>{props.title}</h2>
                <div class="row" id="roww">
                    <div class="col-sm-4" id="col1">
                        <img id="imgg" src={props.smallPoster} alt="Small poster" />
                    </div>
                    <div class="col-sm-4" id="col2">
                        <h2 className="Headingwrapper">{props.title}</h2>
                        <p className="Headingwrapper">{props.synopsis}</p>
                        <p><span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span></p>
                        <p className="Headingwrapper">{props.describe}</p>
                        <div class="row">
                            <div class="col">
                                <p><button class="play">${props.rent} Rent</button><button class="play">${props.purchase} Buy</button></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col"><button class="editButton" onClick={onClick}>Edit Movie</button></div>
                            { showResults ? <Results /> : null }
                        </div>

                    </div>
                    <div class="col-sm-4" id="col3">
                        <img id="imgdesc" src={props.largePoster} alt="largeposter" />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default SelectedMovie

/*   <img id="imgg" src={process.env.PUBLIC_URL + props.imageval} alt="Describe Image" /> */