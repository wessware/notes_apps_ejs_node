

exports.homepage = async(req, res) => {
    const locals = {
        title: "NodeJS Notes Application",
        description: "Notes display Node Application"
    }

    res.render("index", {
        locals,
        layout: "../views/layouts/front-page"
    })
}
exports.about = async(req, res) => {
    const locals = {
        title: "About - NodeJS Notes Application",
        description: "Notes display Node Application"
    }

    res.render("about", locals)
}