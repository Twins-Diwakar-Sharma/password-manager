import {getPassword} from '../services/dbService.mjs'
import {ceaserDecrypt} from '../util/crypto.mjs'

const contrGetPass = async (req, res) => {
    var l = req.body.msg;
    if(/\S/.test(l))
    {
        var p = await getPassword(l);
        var decP = ceaserDecrypt(p);
        res.status(200).json({messages:decP,error:null});
    }
    else
    {
        res.status(400).json({messages:"emptyData",error:"true"});
    }
}

export { contrGetPass }
