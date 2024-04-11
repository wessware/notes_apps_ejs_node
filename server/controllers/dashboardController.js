const Note = require("../models/Notes");
const mongoose = require("mongoose");


exports.dashboard = async (req, res) => {
    const locals ={
        title: "Dashboard",
        description: "The working dashboard for your Notes"
    }
    res.render("dashboard/index", {
        userName: req.user.firstName,
        locals,
        layout: "../views/layouts/dashboard"
    })
}