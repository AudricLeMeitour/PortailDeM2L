

// LOGIN
exports.login_form = function(req, res) { // attention à la route / depuis le /login
     res.render('login');
 };

exports.login_authentication = function(req, res) {
    res.redirect('/');
};

// SIGNUP
exports.signUp_form = function(req, res){
    res.render('signUp');
}

exports.signUp_authentification = function(req, res) {
    res.registerUser(document.getElementById("newUsername").value(),document.getElementById("newPassword").value(),document.getElementById("newEmail").value());
    res.redirect('/');
}


//LOGOUT
exports.logout = function(req, res){
     req.logout();
     res.redirect('/');
 };