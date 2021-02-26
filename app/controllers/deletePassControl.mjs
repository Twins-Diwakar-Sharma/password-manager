import {deletePassword} from '../services/dbService.mjs'

const contrDelPass = async (req,res) => {
    var l = req.body.link;
    if(/\S/.test(l))
    {
        await deletePassword(l);
        res.status(200).json({messages:"deleted",error:null});
    }
    else
    {
        res.status(400).json({messages:"emptyData",error:"true"});
    }
}

export {contrDelPass}
