import {linkToDB} from './controllers/connectDB.mjs'
import express from 'express'
import {router} from './routes/router.mjs'

var exp = express();
exp.use(express.json());
exp.use(express.static("public"));

linkToDB();

exp.use('/',router);

exp.listen(5000,function(){
    console.log("server started");
});
