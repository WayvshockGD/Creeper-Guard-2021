class Command {

    constructor(name, aliases, desc, hidden, so) {

        this.name = name || '';

        this.aliases = aliases || '';

        this.description = desc || '';
        
        this.hidden = hidden || false;

        this.spyOnly = so || false;
    }
}

module.exports = Command;