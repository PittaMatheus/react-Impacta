//serviços rest
const model = require('./model');
model.methods(['get', 'post']);
// Oplões de configuração do objeto - Validações do Model
model.updateOptions({ new: true, runValidators: true });
module.exports = model;