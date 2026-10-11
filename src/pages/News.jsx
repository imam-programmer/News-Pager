import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const News = () => {

  const { country, category, Articles, setArticles } = useContext(ThemeContext)

  const fetchAllNews = async () => {
    try {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`)
      setArticles(res.data.articles)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(Articles)
  useEffect(() => {
    fetchAllNews()
  }, [])

  return (
    <div className='h-screen bg-gray-200 dark:bg-gray-800 py-25 px-4 md:px-0'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-7'>
        {Articles.map((item, idx) => (
          <NewsCart key={idx} article={item} />
        ))}
      </div>
    </div>
  )
}

export default News