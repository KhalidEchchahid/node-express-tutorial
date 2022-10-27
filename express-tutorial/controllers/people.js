let { people } = require('../data')

const getPeolpe = (req, res) => {
    res.status(200).json({ success: true, data: people })
}


const createPersone =  (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
}

const createPersonePostman =  (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
}

const deletePorson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `the person with id ${id}  already doasn't existe` })
    }
    const newPeople = people.filter((person) => person.id !== Number(id))

    return res.status(200).json({ success: true, data: newPeople })

}

module.exports ={ 
    getPeolpe ,
    createPersone ,
    createPersonePostman ,
    updatePerson ,
    deletePorson 
}