import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch"
import Header from "./components/Header";


const Events = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setFilter] = useState("");
  const [completeSearch, setCompletedSearch] = useState("");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCompletedSearch(search.trim());
    }, 600);

    return () => clearTimeout(timer);
  }, [search]);

  let url = "https://event-n17l.vercel.app/events";

  if (search) {
    url = `https://event-n17l.vercel.app/event/search/${completeSearch}`;
  } else if (typeFilter) {
    url = `https://event-n17l.vercel.app/event/${typeFilter}`;
  }
    const {data, loading, error} = useFetch(url)
    
    let events = [];

      if (Array.isArray(data)) {
        events = data;
      } else if (data) {
        events = [data];
      }

    console.log("API DATA :", data);
  

    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      const d = new Date(dateStr.split("T")[0]);
      const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
      return `${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
    };

    

 return(
  <div className="bg-light">
  <main className="container">
  <Header search={search} setSearch={setSearch} /> 
    <div>
    <div className="row">
      <div className="col-md-6">
        <h1 className="text-start" >Meetup Events</h1>
      </div>  
      
        <div className="col-md-6">
          <select className="form-select"  value={typeFilter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">Select event type</option>
            <option value="Online">Online</option>
              <option value="Offline">Offline</option>
          </select>
        </div>
      </div>
        <div className="row">
       
          {events?.map((event) => (
            
                <div key={event._id} className="col-md-4 my-3">
                
                <Link to={`/events/${event._id}`}><img width="380px" height="300px" className="rounded" 
                src={event.imgUrl} alt={event.title} /></Link>
                   
                    <p className="text-start h6">{event.eventDay} {formatDate(event.eventDate)} {event.eventStartTime}</p>
                <h3 className="text-start">{event.title}</h3>
                </div>
          ))}
          </div>
        </div>
        </main>
    </div>   
)
}
export default Events;