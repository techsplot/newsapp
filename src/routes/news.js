const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req, res) => {

    try {
        const newsApi = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/`)
        res.render('news', {articles:newsApi.data})
    }catch (err){
        if(err.response){
            res.render('news', {articles:null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.request){
            res.render('news', {articles:null})
            console.log(err.request)
        }else{
          res.render('news', {articles:null})
            console.log('Error', err.message)
        }
    }
})

module.exports = newsRouter