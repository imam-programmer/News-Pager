import React from 'react'

const NewsCart = ({article}) => {
    console.log(article)
  return (
    <div className='max-w-md mx-auto bg-white dark:bg-gray-900 hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300'>
        
     

        <img src={article.urlToImage} alt="" />
       
    </div>
  )
}

export default NewsCart