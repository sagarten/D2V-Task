import React from 'react'
import "./Nav.css"
import { IconName } from "react-icons/fa";
const Navbar3 = () => {
  return (
    <div>
      <div className='Container'>
        
      <div className='Bar'>
      <h1>THE LIBRARY</h1>
        <ul className='list'>
          <li><a href='.'>Home</a></li>
          <li><a href='.'>About Us</a></li>
          <li><a href='.'>Our Books</a></li>
          <li><a href='.'>Blog</a></li>
          <li><a href='.'>Authors</a></li>
          <li><a href='.'>Events</a></li>
          <li><a href='.'>Pages</a></li>
          <li><a href='.'>ContactUs</a></li>
        </ul>
        </div>
        <div className='property'>
         <h3>ARE YOU SEARCHING A BOOK...?</h3>
         <h1>BIGGEST</h1>
         <h1>LIBRARY</h1>
         <p>loremmged ghwefwh wdf fy gyquqgg hefjdgjh hhdusgfids hgfsgjdb duygejnf gegygg 
         </p>
          <button>BASIC</button>
          <button className='mid'>AUTHOR</button>
          <button>PUBLICATION</button>
        </div>
        <div className='search'>
          <input placeholder='First Name'></input>
          <input placeholder='Last Name'></input>
          <input placeholder='Middle Name'></input>
          <button id="search">SEARCH AUTHOR</button>
        </div>
        
        </div>
        <div className='wel'>
          <h2>Welcome To The LIBRARY</h2>
          <p>kdhs jhhvd  jsmds jdhdsjb </p>
        </div>
        <div className='hole'>
          <div className='hole-e'>
            <img src="..\TASK\book-composition-with-open-book_23-2147690555.avif"></img>
            <h5>EBOOKS</h5>
            <p>vdshgdsv svddvsdvsd dhsdsj ggdh csjhhddjsh dshsjh</p>

          </div>
          <div className='hole-a'>
            <img src="..\TASK\book-composition-with-open-book_23-2147690555.avif"></img>
            <h5>AudioBooks</h5>
            <p>vdshgdsv svddvsdvsd dhsdsj ggdh csjhhddjsh dshsjh</p>
          </div>
          <div className='hole-m'>
             <img src="..\TASK\book-composition-with-open-book_23-2147690555.avif"></img>
             <h5>MAGAZINE</h5>
            <p>vdshgdsv svddvsdvsd dhsdsj ggdh csjhhddjsh dshsjh</p>
          </div>
          <div className='hole-t'>
             <img src="..\TASK\book-composition-with-open-book_23-2147690555.avif"></img>
             <h5>TEANS & KIDS</h5>
            <p>vdshgdsv svddvsdvsd dhsdsj ggdh csjhhddjsh dshsjh</p>
          </div>

        </div>
        <div className='footer'>
            <div>
              <h1 id='o'>OUR TOP CATEGORIES</h1>
              <p id='p'> Here are some of the categories of the boooks available</p>
            </div>
            <div className='boo'>
              <a>Arts</a>
              <a> Biography</a>
              <a>MAGAZINE</a>
              <a>TEANS</a>
            </div>
            <div className='imbo'>
              <div>
              <img src='https://cdn.pixabay.com/photo/2016/05/28/07/05/book-1421097__340.jpg'></img>
              <p>Fabeleven</p>
              </div>
              <div>
              <img src='https://cdn.pixabay.com/photo/2016/05/28/07/05/book-1421097__340.jpg'></img>
              <p>Fabeleven</p>
              </div>
              <div>
              <img src='https://cdn.pixabay.com/photo/2016/05/28/07/05/book-1421097__340.jpg'></img>
              <p>Fabeleven</p>
              </div>
              <div><img src='https://cdn.pixabay.com/photo/2016/05/28/07/05/book-1421097__340.jpg'></img>
              <p>Fabeleven</p></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar3