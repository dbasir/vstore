import React,{ useState } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'

const CreateMovie = () => {
    const[tvshows,setArr]=useState({
        tvshows_title:"",
        tvshows_price:"",
        tvshows_synopsis:"",
        tvshows_tag:"",
        tvshows_small_poster:"",
        tvshows_large_poster:"",
        tvshows_rent:"",
        tvshows_purchase_outright:"",
        tvshows_featured:"",
        tvshows_description:"",
    })

    const submitform=(e)=>{
        
        console.log(tvshows);
        e.preventDefault();
        fetch("http://localhost:5002/tvshows",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(tvshows)
        })
      .then((res) =>res.json())
      .then(data => {
        alert(`TV Show: ${tvshows.tvshows_title} is added successfully!!!`)
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
                        <input type="text" class="form-control" id="title" placeholder="Title" value={tvshows.tvshows_title} name="title" onChange={event=>{
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
                        }}/>
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

                    
                    <button type="submit" class="btn btn-default">Create Movie</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default CreateMovie

/*   <img id="imgg" src={process.env.PUBLIC_URL + props.imageval} alt="Describe Image" /> */