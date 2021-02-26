import {Pass} from './model/Pass.mjs'
import Sequelize from 'sequelize'

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
        Pass.sync();


