exports.render = function(req, res) {
   // res.send('Hello World');

//session
   if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    
//////

    res.render('index',{title: 'Big Explosion'
    })
    };
    