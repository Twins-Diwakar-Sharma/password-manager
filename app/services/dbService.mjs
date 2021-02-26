import Sequelize from 'sequelize'
import {Pass} from '../model/Pass.mjs'

async function connect(){
        const seq = new Sequelize('password_manager','root','root',{
                dialect: 'mysql', 
                port:5432, 
                host:'db'}); 

        let retries = 10;
        while (retries) {
            try{
                await seq.authenticate();
                console.log('Chal pada babe !!! ');
                break;
            }catch(e){
                console.error('gg', e);
                retries -= 1;
                console.log(`retries left : ${retries}`);
                await new Promise(res => setTimeout(res, 5000));
            }
        }

        Pass.initialize(seq);

}


async function getPassword(inLink){
    var outPass = "nothing";
    await Pass.findOne({
        where:{
            link: inLink
        }
    }).then(pass=>{
        outPass = pass.pass;
    });
    console.log("password in getPass " + outPass);
    return outPass;
}

async function newPassword(link,pass){
    await Pass.spawn(link,pass);
    await Pass.sync();
    console.log("new password is called : " + link + "," + pass );
}


async function updatePassword(link,pass){
    await Pass.findOne({
        where:{
            link: link
        }    
    }).then(password=>{
        password.pass = pass;
        password.save();
        Pass.sync();
    });
    console.log("password is updated");
}

async function deletePassword(link) {
    await Pass.destroy({
        where:{
            link: link
        }
    }).then(rowDeleted=>{
        if(rowDeleted == 1){
            console.log("deleted successfully");
        }else{
            console.log("upsose nahi hua delete");    
        }
    }).catch(error=>{
        console.log("mein hoon Error : "+ error);
    });
    await Pass.sync();
}
export {connect, getPassword, newPassword, updatePassword, deletePassword} ;
