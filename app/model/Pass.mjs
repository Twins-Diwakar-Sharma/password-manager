import Sequelize from 'sequelize'

const {Model} = Sequelize;

class Pass extends Model {
    static spawn(name,password){
        return Pass.create({link:name, pass:password});
    }

    static initialize(seq){
         Pass.init(
            {
                link: Sequelize.TEXT,
                pass: Sequelize.TEXT
            },
            {
                sequelize: seq,
                modelName: "Pass"
            }
        );


    }
}

export {Pass}
