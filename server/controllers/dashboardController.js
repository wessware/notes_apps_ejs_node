

exports.dashboard = async (req, res) => {
    const locals ={
        title: "Dashboard",
        description: "The working dashboard for your Notes"
    }
    res.render("dashboard/index", {
        locals,
        layout: "../views/layouts/dashboard"
    })
}