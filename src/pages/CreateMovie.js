import React,{ useState } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'

const CreateMovie = () => {
    const[marvelmovies,setArr]=useState({
        marvel_title:"",
        marvel_price:"",
        marvel_synopsis:"",
        marvel_tag:"",
        marvel_small_poster:"",
        marvel_large_poster:"",
        marvel_rent:"",
        marvel_purchase_outright:"",
        marvel_featured:"",
        marvel_description:"",
    })

    const submitform=(e)=>{
        
        console.log(marvelmovies);
        e.preventDefault();
        fetch("http://localhost:5002/marvelmovies",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(marvelmovies)
        })
      .then((res) =>res.json())
      .then(data => {
        alert(`Movie: ${marvelmovies.marvel_title} is added successfully!!!`)
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })
    }

    return (
        <div id="container">
            <Header />
            <div class="container" id="cont">
                <h2>Create a Movie</h2>
                <form action="/" method="POST" onSubmit={submitform}>
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

                    
                    <button type="submit" class="btn btn-default">Create Movie</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default CreateMovie

/*   <img id="imgg" src={process.env.PUBLIC_URL + props.imageval} alt="Describe Image" /> */