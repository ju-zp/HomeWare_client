import React from 'react'

const Title = ({ title }) => {
    const page = title.slice(1)
    return <h2 className='title'>
        {page.charAt(0).toUpperCase() + page.slice(1)}
    </h2>
}

export default Title