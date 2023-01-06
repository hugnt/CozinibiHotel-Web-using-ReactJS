
function NotFoundPage() {
    return ( 
        <div className="not-found-img w-100">
            <img src={require("~/assets/images/404.gif")} alt="404 NOT FOUND" style={{
                width:"100%",
                height:"100%",
                objectFit:"contain",
            }}/>
        </div>
     );
}

export default NotFoundPage;