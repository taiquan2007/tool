class newscontrollers {

    //[get] / news
    index(req,res) {
        res.render('news');
    }
    // [GET] /news/:slug
    show() {
        res.send('news detail!!!');
    }
}

module.exports = new newscontrollers;
