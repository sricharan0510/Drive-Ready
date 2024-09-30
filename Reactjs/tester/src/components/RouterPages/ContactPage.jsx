import React from 'react'
import { useParams } from 'react-router-dom'

function ContactPage() {
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <h1>This is Contact Page</h1>
        </div>
    )
}

export default ContactPage
