import "./App.css";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Show = (props)=>{
    return (
        <div className="display">
            <p>ID: {props.id}</p>
            <p>Title: {props.title}</p>
            <p>Body: {props.body}</p>
        </div>
    );
}
const Items = (props) =>{
    const array=props.data.slice(props.page*10,props.page*10+10);
    //console.log(array);
    return (
        <div>
            {array.map((items)=>{
                return <Show title={items.title} id={items.id} body={items.body}/>
            })}
        </div>
    );
}
const Display = (props) => {
    const [page,setPage]=useState(0);
    const handleClick = (event) => {
        setPage(event.selected);    
    }
    return (
        <div>
            {!Array.isArray(props.data) ? <Show title={props.data.title} id={props.data.id} body={props.data.body}/>:<></>}
            {Array.isArray(props.data) ? <Items page={page} data={props.data}/>:<></>}
            {Array.isArray(props.data) ?
            <ReactPaginate
                previousLabel="< Previous"
                nextLabel="Next >"
                onPageChange={handleClick}
                breakLabel={"..."}
                pageCount={10}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                containerClassName="pagination pagination-lg justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-link"
                nextLinkClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
            />:<></>}
        </div>
    );
}

export default Display;