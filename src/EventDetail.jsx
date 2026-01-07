import { useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import useFetch from "./useFetch"
import Header from "./components/Header";


const EventDetail = () => {
    const {eventId} = useParams();
    const {data, loading, error} = useFetch(`https://event-w7es.vercel.app/events/${eventId}`)
    
    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      const d = new Date(dateStr.split("T")[0]);
      const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
      return `${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
    };

 return(
   
    <div className="bg-light">
        <div className="container">   
          <Header/> 
         {data ? (  
          
        <div className="row ">
            
         <div className="col-md-6 my-4">
         
                <h2 className="text-start">{data.title}</h2>
                <p className="text-start">Hosted By:
                <br/>
                <strong>{data.hostedBy}</strong>
                </p>
                <br/>
                <img className="float-start pb-2" width="550px" height="350px" 
                src={data.imgUrl} alt={data.title} />
                
                <br/><br/>
                <h3 className="text-start">Details:</h3>
                <p className="text-start">{data.description}</p><br/>
                <h3 className="text-start">Additional Information</h3>
                <p className="text-start"><strong>Dress Code: </strong>{data.dressCode}</p>
                <p className="text-start"><strong>Age Restriction :</strong> {data.ageRestriction}</p><br/>
                 <h3 className="text-start">Event Tags</h3> 
                 <h5 className="text-start">{data.eventTag?.map((tag)=>(
                     <span className="badge bg-danger mx-2">{tag}  </span>
                 ))}</h5><br/>
                </div>
                <div className="col-md-6 my-4">
                <div className="card p-3 mb-4 shadow-sm">
                    <div className="d-flex align-items-start mb-2">
                        <i className="bi bi-clock me-2 text-muted"></i>
                        <div>
                        <div>{data.eventDay} {formatDate(data.eventDate)} {data.eventStartTime} to </div>
                        <div className="text-start">{data.eventDay} {formatDate(data.eventDate)} {data.eventEndTime}</div>
                        </div>
                    </div><br/>

                    <div className="d-flex align-items-start mb-2">
                        <i className="bi bi-geo-alt me-2 text-muted"></i>
                        <div>
                        <div className="text-muted">{data.venue}</div>
                        </div>
                    </div><br/>

                    <div className="d-flex align-items-center">
                        <i className="bi bi-currency-rupee me-2 text-muted"></i>
                        <strong>{data.price}</strong>
                    </div>
                </div>

                <h4 className="text-start mb-3">Speakers: (2)</h4>
         
                <div className="row mb-4">
                {data.speakers?.map((speaker)=>(
                    <div className="col-6">
                        <div className="card text-center p-3 shadow-sm">
                        <img width="100px" height="100px"
                            src={speaker.pic}
                            className="rounded-circle mx-auto mb-2"
                            
                        />
                        <h6 className="mb-0">{speaker.name}</h6>
                        <small className="text-muted">{speaker.profile}</small>
                        </div>
                    </div>
                ))}
                
                </div>

                
             </div>
        
          </div>
          ):(
            <p className="btn btn-danger">Event not found.</p>
          )}
        </div></div>
    
       
)
}
export default EventDetail;