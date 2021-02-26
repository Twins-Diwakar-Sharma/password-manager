import {updatePassword} from '../services/dbService.mjs'
import {ceaserEncrypt} from '../util/crypto.mjs'

const contrUpdPass = async (req, res) => {
    var l = req.body.link;
    var p = req.body.pass;
    if(/\S/.test(l) && /\S/.test(l))
    {
        var encP = ceaserEncrypt(p);
        await updatePassword(l,encP);
        res.status(200).json({messages:"updated",error:null});
    }
    else
    {
        res.status(400).json({messages:"emptyData",error:"true"});
    }

}

export {contrUpdPass}
