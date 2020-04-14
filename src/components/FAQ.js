import React from 'react';
import './FAQ.css';

 class FAQ extends React.Component{
	 render(){
		 return(
			 <React.Fragment>
			 	<div className="accordion">
						  <div className="accordion__item">
							<h3 className="accordion__title js-title" >How to Apply for selected room.?</h3>
							<p className="accordion__copy accordion__copy--open js-copy">You have to contact to seller by your own. The Contact details such as mobile number and email is provided below the description of room, there you will find details. Happy Searching.</p>
						  </div>

						  <div className="accordion__item">
							<h3 className="accordion__title js-title">How to upload image and other details of Room?</h3>
							<p className="accordion__copy js-copy">By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this</p>
						  </div>

						  <div className="accordion__item">
							<h3 className="accordion__title js-title">How to change exixting details of the room?</h3>
							<p className="accordion__copy js-copy">By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this</p>
						  </div>

						  <div className="accordion__item">
							<h3 className="accordion__title js-title">Can we get room according to day?</h3>
							<p className="accordion__copy js-copy">By not having the imagination to imagine what the content "might" be, a design consideration is lost. Meaning becomes obfuscated because "it's just text", understandability gets compromised because nobody realized that this</p>
						  </div>
						<div className="accordion__item">
							<h3 className="accordion__title1">
								Mail us your Queries at PGMate@iiita.ac.in
							</h3>
						</div>
						</div>
			 </React.Fragment>
			 
		 )
	 }
 }

export default FAQ;