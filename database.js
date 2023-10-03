const connect = require('@databases/sqlite')
const {sql} = require('@databases/sqlite')

function create_table(){
    let db = connect('database.db')
    db.query(sql`
    CREATE TABLE IF NOT EXISTS users (
        name TEXT NOT NULL PRIMARY KEY,
        email TEXT NOT NULL,
        password TEXT NOT NULL
    )
    `)
}

function insertuser(name='',email='',password=''){
    let db = connect('database.db')
    db.query(sql`
        INSERT INTO users (name,email,password) VALUES ('${name}','${email}','${password}')
    `)
}

function selectuser(mode=0,information=''){
    let db = connect('database.db')
    var result = null
    switch (mode){
        case 0:
            //when information name
            result = db.query(sql`
                SELECT * FROM users WHERE name = '${information}'
            `)
            break
        case 1:
            //when information email
            result = db.query(sql`
                SELECT * FROM users WHERE email = '${information}'
            `)
            break
        case 2:
            //get all informations
            result = db.query(sql`
                SELECT * FROM users
            `)
    }
    return result
}

function updateuser(old_name='',name='',email='',password=''){
    let db = connect('database.db')
    db.query(sql`
        UPDATE FROM users SET
        name = '${name}',
        email = '${email}',
        password = '${password}'
        WHERE name = '${old_name}'
    `)

}

function deleteuser(name=''){
    let db = connect('database.db')
    db.query(sql`
        DELETE FROM users WHERE name = '${name}'
    `)
}

module.exports = {create_table,insertuser,selectuser,updateuser,deleteuser}