const express = require('express')
const eachnewsRouter = express.Router()
const axios = require('axios')

eachnewsRouter.get('/:id', async(req, res) => {
   let articleId = req.params.id

    try {
        const newsApi = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleId}`)
        res.render('newsSingle', {article:newsApi.data})
    }catch (err){
        if(err.response){
            res.render('newSingle', {article:null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.request){
            res.render('newsSingle', {article:null})
            console.log(err.request)
        }else{
          res.render('newsSingle', {article:null})
            console.log('Error', err.message)
        }
    }
})

module.exports = eachnewsRouter