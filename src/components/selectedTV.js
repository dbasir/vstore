import React,{ useState } from 'react';
import Header from "./Header";
import Footer from './Footer'
  
const SelectedTV = (props) => {
    const[tvshows,setArr]=useState({
        tvshows_title:props.title,
        tvshows_price:props.price,
        tvshows_synopsis:props.synopsis,
        tvshows_tag:props.tag,
        tvshows_small_poster:props.smallPoster,
        tvshows_large_poster:props.largePoster,
        tvshows_rent:props.rent,
        tvshows_purchase_outright:props.purchase,
        tvshows_featured:props.featured,
        tvshows_description:props.describe,
    })
    const submitform=(e)=>{
        
        console.log(tvshows);
        e.preventDefault();
        fetch("http://localhost:5002/tvshows/"+props.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(tvshows)
        })
      .then((res) =>res.json())
      .then(data => {
        alert(`TV Show: ${tvshows.title} is updated successfully!!!`)
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })
    }
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
     const Results = () => (
      
    <div id="results" className="search-results">
         <form action="/" method="PUT" onSubmit={submitform}>
                    <div class="form-group">
                        <label for="email">Title:</label>
                        <input type="text" class="form-control" id="title" placeholder="Title" value={tvshows.tvshowstitle} name="title" onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_title:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Price:</label>
                        <input type="text" class="form-control" id="price" placeholder="Price" value={tvshows.tvshows_price} name="price" onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_price:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Synopsis:</label>
                        <input type="text" class="form-control" id="synopsis" placeholder="Synopsis" value={tvshows.tvshows_synopsis} name="synopsis" onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_synopsis :event.target.value
                            })
                        }} />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Tag:</label>
                        <input type="text" class="form-control" id="tag" placeholder="Tag" value={tvshows.tvshows_tag} name="tag" onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_tag:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Small Poster Path:</label>
                        <input type="text" class="form-control" id="smallposter" placeholder="Small Poster Path" value={tvshows.tvshows_small_poster} name="smallposter" onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_small_poster:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Large Poster Path:</label>
                        <input type="text" class="form-control" id="largeposter" placeholder="Large Poster Path" value={tvshows.tvshows_large_poster} name="largeposter" onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_large_poster:event.target.value
                            })
                        }}/>tvshows
                    </div>
                    <div class="form-group">
                        <label for="pwd">Rent:</label>
                        <input type="text" class="form-control" id="rent" placeholder="Rent" name="rent" value={tvshows.tvshows_rent} onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_rent:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Purchase Outright:</label>
                        <input type="text" class="form-control" id="purchase" placeholder="Purchase Outright" value={tvshows.tvshows_purchase_outright} name="purchase" onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_purchase_outright:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Featured:</label>
                        <input type="text" class="form-control" id="featured" placeholder="Featured" value={tvshows.tvshows_featured} name="featured" onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_featured:event.target.value
                            })
                        }}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Description:</label>
                        <textarea  type="text" class="form-control" id="description" placeholder="Description" value={tvshows.tvshows_description} name="description" rows="4" cols="50" onChange={event=>{
                            setArr({
                                ...tvshows,
                                tvshows_description:event.target.value
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
                            <div class="col"><button class="editButton" onClick={onClick}>Edit TV Show</button></div>
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

export default SelectedTV

/*   <img id="imgg" src={process.env.PUBLIC_URL + props.imageval} alt="Describe Image" /> */
