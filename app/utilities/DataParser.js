const User = require('../database/models/User');

class DataParser {
    
    constructor(table, data) {
        this.table  = this.tablesDictionary(table);
        this.data   = data;
        this.dataParsed = {}

        return this.generateParser();
    }

    generateParser() {
        for (const input in this.data) {
            Object.keys(this.table.rawAttributes).filter(column => {
                if(column.includes(input)) this.dataParsed[column] = this.data[input];
            })
        }

        return this.dataParsed;
    }

    revertParser() {
        //PARSEAR DADO PARA RETORNAR NA RESPONSE
    }

    tablesDictionary(table) {
        let tables = {
            "user": User,
        };
        
        return tables[table];
    }

}

module.exports = DataParser;