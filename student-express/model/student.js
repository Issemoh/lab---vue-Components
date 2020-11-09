module.exports = (sequelize, DataTypes) => {
    var Student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,
        }, startID: {
            type: DataTypes.STRING,
        }, present: {
            type: DataTypes.BOOLEAN,
        }
    })
    Student.sync({force: true}).then( () => {
        console.log('synced table')
    })
    return Student
}
