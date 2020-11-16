import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddHouse.css';

const AddHouse = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        // console.log(file);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('price', info.price);
        formData.append('location', info.location);
        formData.append('bedroom', info.bedroom);
        formData.append('bathroom', info.bathroom);

        fetch('http://localhost:5000/addHouse', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("House Added Successfully");
            }
        })
        .catch(error => {
            alert("House Added Failed");
            console.error(error);
        })

        e.preventDefault();
    }

    return (
        <div className="add-house container-fluid row">
            <Sidebar />
            <div className="col-md-10 mt-5 ml-md-5 ml-0">
                <div className="d-flex justify-content-between ml-md-5 ml-0 mb-5">
                    <h4 className="ml-md-5 mb-0">Add Rent House</h4>
                    <p>Tayab Pabel</p>
                </div>
                <div className="booking-form ml-md-5 ml-0">
                    <form onSubmit={handleSubmit} style={{maxWidth:'1044px'}}>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="title">House Title</label>
                                <input onBlur={handleBlur} name="title" type="text" id="title" className="form-control" placeholder="Enter title"/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="price">Price</label>
                                <input onBlur={handleBlur} name="price" type="text" id="price" className="form-control" placeholder="Enter Price"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="location">Location</label>
                                <input onBlur={handleBlur} name="location" type="text" id="location" className="form-control" placeholder="Enter Location"/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="bedroom">No of Bedroom</label>
                                <input onBlur={handleBlur} name="bedroom" type="text" id="bedroom" className="form-control" placeholder="Enter No of Bedroom"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="bathroom">No of Bathroom</label>
                                <input onBlur={handleBlur} name="bathroom" type="text" id="bathroom" className="form-control" placeholder="Enter No of Bathroom"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="upload-image">
                                    <p className="mb-2">Thumbnail</p>
                                    <label htmlFor="file">
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <span className="ml-2">Upload Image</span>
                                    </label>
                                    <input onChange={handleFileChange} name="file" type="file" id="file" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddHouse;