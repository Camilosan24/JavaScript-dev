const adminController= {};

adminController.principalPage = (req,res)=>{
    res.render('index');
}

module.exports = adminController;


