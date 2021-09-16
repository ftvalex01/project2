const { Schema, model } = require("mongoose");


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const wantedSchema = new Schema({
    aliases:{
        type: [String]
    },
    description:{
        type: String
    },

    dates_of_birth_used:{
        type: [String]
    },
    hair:{
        type: String
    },
    weight:{
        type: String
    },
    heigth:{
        type: String
    },
    occupations:{
        type: [String]
    },
    remarks:{
        type: String
    },
    nationality:{
        type: String
    },
    title:{
        type: String
    },
    subject:{
        type:[String]
    },
    reward_text:{
        type: String
    },
    field_offices:{
        type: String
    },
    image:{
        type: String
    },
    uid:{
        type: String
    },
    id:{
        type: String
    }
    
});

const Wanted = model("Wanted", wantedSchema);

module.exports = Wanted;
