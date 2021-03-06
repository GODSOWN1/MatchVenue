import React from 'react'

export default function Location() {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.5288157847!2d2.0787279470992464!3d41.39476881460054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sde!4v1624217973002!5m2!1sen!2sde" 
                width="100%" 
                height="500px" 
                frameBorder="0"
                title="gglemaps" 
                allowFullScreen
            ></iframe>


            <div className="location_tag">
                <div>
                    Location
                </div>
                
            </div>

        </div>
    )
}
