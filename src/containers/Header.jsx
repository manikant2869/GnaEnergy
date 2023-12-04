import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
function Header() {
  return (
    <div className="header-height ">
      <p className="text-center fs-1 py-2 tours"> Tours in London</p>
      <div className="search-height my-3">
        <div className="row ">
          <div className="col-4 my-2 ms-0 text-start ">
            <div className="row">
              <div className="col-12 ms-2">
            <p className="fs-4 location ms-0"><LocationOnIcon sx={{ fontSize: 30 }}/> Location</p>
            <p className="fs-6 location ms-4">Where are you going ?</p>
            </div>
            </div>
          </div>
          <div className="col-4  my-2 ">
            <p className="fs-4 my-0 "> <EventAvailableOutlinedIcon /> Check in - Check out</p>
            <p className="fs-6 my-0 ms-4">October 15 - November</p>
          </div>
          <div className="col-4  my-2 ">
            <div className="row">
              <div className="col-6 ">
                <p className="fs-4 my-0"><ExploreOutlinedIcon/>Tour Type</p>
                <p className="fs-6 my-0 ms-4">
                  2 Adults - 1 Room - 1 Children{" "}
                </p>
              </div>
              <div className="col-6 my-2  text-center">
                <button className="btn search_btn p-3 fs-6 ms-2"><span><SearchIcon /></span>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
