import React from 'react'
import Myimg from './assets/img.jpg'
import './HeroSection.css';
export default function HeroSection() {
    // let stylein ={
    //     height:"200px"
    // }
  return (
    // // <div>
    //     {/* how to apply it img 
    //      TWO types to apply img in react
    //      1.by the help of public folder.

    //      it apply by the static
    //      2.by the help of assest Folder .
    // first put the img in public folder */}

    // {/* <img  style={{width:"100%" ,heigh:"150px" }} src="img.jpg" alt="" /> */}



    // {/*
    // its apply dinamy 
    
    // 2.by the help of assest Folder .
    // first you import it then you can apply it as a variable name .
    
    
    // */}
    
    // {/* <  img  style={{width:"100%" ,heigh:"150px" }} src={Myimg} alt="" /> */}
    // {/* </div> */}


    <div className="container">
        <div className="paragraph">
            <h1>WELCOME TO My page...</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ab illum cumque, ea suscipit ipsa tempora fugiat nam ullam inventore dignissimos consectetur exercitationem quibusdam iusto enim atque laborum, voluptatibus unde!
            Est vero totam debitis similique voluptatem, eum rem nesciunt velit, eveniet sed maiores vitae! Suscipit nam, numquam reiciendis eius eaque tempora ab eum, iure deleniti nemo, accusamus veritatis ad alias?
            Omnisvoluptatibus illo quisquam quas sed consequuntur nihil id, dolor consectetur itaque. Dicta optio, impedit laboriosam aspernatur possimus sunt sequi, magnam id sed voluptate voluptates animi doloremque neque.
            </p>
            <button>  Check it </button>
        </div>
    </div>
  )
}
