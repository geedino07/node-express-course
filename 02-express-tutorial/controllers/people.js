let {people} = require('../data')


const getPerson = (req, res)=>{
    res.status(200).json({success:true, data: people})}


const createPerson = (req, res)=>{
    console.log(req.body)
    const {name} = req.body
    console.log(name)
    if (name) {
        return res
        .status(200)
        .send({success: true, person: name})
    }
    res.status(400).json({ success: false, msg:'Please provide a login name'})
}

const createPersonPostman = (req, res)=>{
    console.log(req.body)
    const {name} = req.body
    console.log(name)
    if (name) {
        return res
        .status(200)
        .send({success: true, data: [...people, name]})
    }
    res.status(400).json({ success: false, msg:'Please provide a login name'})
}

const updatePerson =  (req, res)=>{
    const {id} = req.params
    const {name} = req.body
    console.log(id, name)
    
    const person = people.find((person)=> person.id === Number(id))
    if (!person) {
        return res
        .status(404)
        .json({ success: false, msg: `no person with id: ${id}`})
    }
    const newPeople = people.map((person)=>{
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data: newPeople})
    
}

const deletePerson = (req, res)=>{
    const {id} = req.params
    // const {sname} = req.body
    const name= people.find((name)=> name.id === Number(id))
    if (!name){
        return res
        .status(404)
        .json({success: false, msg: `no name with id : ${id}`})
    }
    console.log(id, name)

    const newPerson = people.filter((name)=>name.id !== Number(id));
    return res.status(200).json({success: true, data: newPerson})
    // res.send(`successfully deleted ${name} `) 
}

module.exports = {
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}