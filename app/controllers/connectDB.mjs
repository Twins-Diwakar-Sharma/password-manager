import {connect} from '../services/dbService.mjs'

async function linkToDB() { 
    connect();
}

export {linkToDB}
