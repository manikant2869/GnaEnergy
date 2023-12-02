import datacontent from "../assets/data.json";
import { Slider } from "@mui/material";
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import { useEffect, useState } from "react";
import { createElement } from "react";
export default function Main() {
  const data = datacontent;
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredlist, setFilteredList] = useState(data);
  const [popularFilter, setPopularFilter] = useState(new Set());
  const recordPerPage = 5;
  const [page, setPage] = useState(1);
  const filterHotels = () => {
    console.log("current data is ", filteredlist);
    const newList = data.filter(
      (hotel) =>
        hotel.hotelBasicInfo.price &&
        hotel.hotelBasicInfo.price >= priceRange[0] &&
        hotel.hotelBasicInfo.price <= priceRange[1]
    );
    console.log("Filtered Hotels", newList, priceRange);
    setFilteredList(newList);
  };

  const handleChange = (e, newValue) => {
    setPriceRange(newValue);
  };

  useEffect(() => {
    let timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(filterHotels, 500);
  }, [priceRange]);
  const handlePopularFilter = (target) => {
    const value = target.value;
    // popularFilter.add(value);
    console.log("value", target.checked, target.value);
    let newPopularFilter = new Set(popularFilter);
    if (target.checked) {
      if (!newPopularFilter.has(value)) {
        newPopularFilter.add(value);
      }
    } else {
      newPopularFilter.delete(value);
    }
    setPopularFilter(newPopularFilter);
  };
  useEffect(() => {
    let newfilteredList = data;
    let newlist = data;
    if (popularFilter.has("Non-Smoking")) {
      newlist = newfilteredList.filter((data) => {
        let roominfo = data.roomInfo.physicalRoomName.includes("Non-Smoking");
        if (roominfo) {
          return data;
        }
      });
    }
    if (popularFilter.has("double bed")) {
      newlist = newlist.filter((hotels) => {
        let bed = hotels.roomInfo.bed.contentListHover[0];
        if (bed) {
          let bedsize = bed.includes("double");
          if (bedsize) {
            return hotels;
          }
        }
      });
    }
    if (popularFilter.has("discountLabels")) {
      newlist = newlist.filter((hotels) => {
        if (hotels.discountLabels[0]) {
          return hotels;
        }
      });
    }
    if (popularFilter.has("Great")) {
      newlist = newlist.filter((hotels) => {
        let comment = hotels.commentInfo.commentDescription.includes("Great");
        if (comment) {
          return hotels;
        }
      });
    }
    console.log("new list is ", newlist);
    setFilteredList(newlist);
  }, [popularFilter]);

  const handlePagination = (currpage) => {
    setPage(currpage);
  };
  const handleNextPage = () => {
    let currpage = page;
    let length = filteredlist.length;
    if (length > currpage * recordPerPage) {
      setPage(currpage + 1);
    } else {
      setPage(1);
    }
  };
  const handlePrevPage = () => {
    let currpage = page;
    let length = currpage * recordPerPage - recordPerPage;
    if (length > 0) {
      setPage(currpage - 1);
    } else {
      setPage(1);
    }
  };
  console.log("popular filter is ", popularFilter);
  return (
    <>
      <div className="containers mx-3 ">
        <div className="row">
          <div className="col-lg-4">
            <div className="filter-box">
              <div className="border rounded shadow-sm p-4 mt-3">
                <div>
                  <span className="fs-5 fw-bold my-3">Price</span>
                </div>
                <div className="">
                  <Slider
                    value={priceRange}
                    getAriaLabel={() => "Temperature range"}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                  />
                  {/* {filteredlist.map((hotel,index)=><div key={index}>{hotel.hotelBasicInfo.hotelEnName + " " + hotel.hotelBasicInfo.price}</div>)} */}
                </div>
                <div>
                  <span>MIN:{priceRange[0]}</span>
                  <span className="ms-3">MAX:{priceRange[1]}</span>
                </div>
              </div>
              <div>
                <div className="border rounded shadow-sm mt-3">
                  <div className="fw-bold fs-5 ms-3">Popular Filter</div>
                  <ul className="popular-filter-list">
                    <li className="">
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="double bed"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            handlePopularFilter(e.target);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Double Bed
                        </label>
                      </div>
                    </li>
                    <li className="mt-2">
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Non-Smoking"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            handlePopularFilter(e.target);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Non-Smoking
                        </label>
                      </div>
                    </li>
                    <li className="mt-2">
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="discountLabels"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            handlePopularFilter(e.target);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Discounted Hotels
                        </label>
                      </div>
                    </li>
                    <li className="mt-2">
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Great"
                          id="flexCheckDefault"
                          onChange={(e) => {
                            handlePopularFilter(e.target);
                          }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Great Hotel
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="fs-3 fw-bold my-1">{filteredlist.length} Hotels</div>
            <hr />
            <div className="row me-1">
              {filteredlist
                .slice(
                  page * recordPerPage - recordPerPage,
                  page * recordPerPage
                )
                .map((d) => {
                  return (
                    <div className="col-12 my-2 border rounded shadow" key={d.hotelBasicInfo.hotelName}>
                      <div className="row">
                        <div className="col-3 d-flex">
                          <img
                            src={d.hotelBasicInfo.hotelImg}
                            className="imgsize"
                          />
                          <div class="wishlist">
                            <i className="fa fa-heart-o px-5"></i>
                            </div>
                        </div>
                        <div className="col-9">
                          <div className="row m-0 p-0 ">
                            <div className="col-9 fs-4 my-auto p-0 fw-bold  ">
                              <div className="">{d.hotelBasicInfo.hotelName}{" "} </div>
                            </div>
                            <div
                              className="col-3 m-0  p-0 justify-content-end "
                            >
                              <p className="star  p-0 mb-0 m-2  text-end ">
                                {[...Array(d.hotelStarInfo.star)].map((_,i)=>{
                                    return <i className="fa fa-star" key={i}></i>
                                })}
                                
                              </p>
                              <p className="text-end p-0 m-0 ">
                                {d.commentInfo.commenterNumber}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div>
                                <span>{d.commentInfo.commentScore}/5 </span>
                                <span className="text-primary">
                                  {d.commentInfo.commentDescription}{" "}
                                </span>
                              </div>
                              <div>
                                {d.tags[0].tagTitle == "OneSentenceComment"
                                  ? d.tags[0].name
                                  : d.tags[1].name}
                              </div>
                              <div>{d.positionInfo.positionDesc}</div>
                            </div>
                            <div className="col-6">
                              <div className="text-end">
                                <div>
                                  {d.tags[0].tagTitle === "DISCOUNTPERCENT" ? (
                                    <div className="my-2">
                                      <p>
                                        <span className="border p-1 discount">
                                          Special Discount{" "}
                                        </span>
                                        <span className="discount-percent border p-1 bg-danger text-white">
                                          {" "}
                                          {"   " + d.tags[0].value} % off
                                        </span>{" "}
                                      </p>
                                      <div>
                                        <span className="text-decoration-line-through">
                                          {"US$  " +
                                            d.hotelBasicInfo.originPrice}{" "}
                                        </span>
                                        <span className="fw-bold fs-5">
                                          US$ {d.hotelBasicInfo.price}
                                        </span>
                                      </div>
                                    </div>
                                  ) : (
                                    <span className="fw-bold fs-4">
                                      US$ {d.hotelBasicInfo.price}
                                    </span>
                                  )}
                                </div>
                                <div>
                                  After Tax US${" "}
                                  {d.hotelBasicInfo.onlineTaxPrice} per night
                                </div>
                                <div className="my-3 d-flex justify-content-end text-white">

                                  <div
                                     type="button"
                                    className="custom_btn"
                                  >
                                   <i> View Detail</i> <span className="ms-2"><NorthEastOutlinedIcon sx={{ fontSize: 20 }}/></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="my-5">
              {filteredlist.length > recordPerPage && (
                <div>
                  <button
                    onClick={handlePrevPage}
                    className="btn mx-2 prev_btn"
                  >
                    prev
                  </button>
                  {[...Array(parseInt(filteredlist.length / 5))].map((_, i) => {
                    return (
                      <span
                        onClick={() => {
                          handlePagination(i + 1);
                        }}
                        className="mx-2 border rounded btn pagination_btn"
                        key={i}
                      >
                        {i + 1}
                      </span>
                    );
                  })}
                  <button
                    onClick={handleNextPage}
                    className="btn mx-2 next_btn"
                  >
                    next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
