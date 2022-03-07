import Pagination from "../../components/Pagination";
import MovieCard from "../../components/MovieCard";

function Listing(){
    return(
        <>
       <Pagination />
        <div className="container">
           <div className="row">
               <div className="col">
                   <MovieCard/>
                </div>   
            </div>
        </div>
        <div className="container">
           <div className="row">
               <div className="col">
                   <MovieCard/>
                </div>   
            </div>
        </div>
        <div className="container">
           <div className="row">
               <div className="col">
                   <MovieCard/>
                </div>   
            </div>
        </div>
       </>
    );
}


export default Listing;