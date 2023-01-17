import express from "express"
import clients from "./clientesRoutes.js"

const routes = (app)=>{
    app.route('/').get((req, res)=>{
        res.status(200).send({nome:"route"})
    })

    app.use(
        express.json(),
        clients
    )
}

export default routes