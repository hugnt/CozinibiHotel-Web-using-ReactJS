import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
//css
import './Comment.css'

//add icon
library.add(faQuoteLeft);

//sample

const sample = {
    cmt: `I was looking for a nice 
    hotel, but with various activities when staying there. 
    Boy, was I surprised! Cozynibi Hotel was anything but 
    boring and all the things I did and places I 
    visited was well worth it!`,
    ava: require("~/assets/images/home/ava.jpg"),
    author: "Elon Musk",
    country: "USA"
}
function Comment(props) {
    let {comment, ava, author, country, classname} = props;
    return (
        <div className={`comment-box ${classname}`}>
            <form action="" className="comment-form w-100">
                <fieldset>
                    <legend>
                        <FontAwesomeIcon icon="fa-solid fa-quote-left" className='icon-fa' />
                    </legend>
                    <div className="para">
                        <p>
                           {comment?comment:sample.cmt}
                        </p>
                        <br />
                        <br />
                        <hr
                            style={{
                                height: ".01rem",
                                color: "gray",
                                backgroundColor: "gray",
                                width: "100%"
                            }}
                        />
                        <br />
                    </div>
                    <div className="author d-flex">
                        <div className="ava">
                            <img
                                src= {ava?ava:sample.ava}
                                alt=""
                                className="w-100"
                            />
                        </div>
                        <div className="infor">
                            <span className="name" style={{ fontFamily: '"Font-Bold"' }}>
                                {author?author:sample.author}
                            </span>
                            <br />
                            <span>FROM: {country?country:sample.country}</span>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Comment;