const User = require("../model/User.model");
const validarCpf = require("validar-cpf");

async function signin(request, response) {
  let { cpf } = request.body;

  if (!cpf) {
    response.status(401).json({ msg: "O campo nao pode estar vazio" });
    return;
  }

  const user = await User.findOne({ cpf: cpf });
  if (!user) {
    return response
      .status(400)
      .json({ success: false, msg: "Cpf não encontrado" });
  }

  response.status(200).json({ success: true, user });
}

async function singup(request, response) {
  let { name, lastname, phone, cpf } = request.body;

  if (!name || !lastname || !phone || !cpf)
    return response
      .status(400)
      .json({ sucess: false, msg: "Preencha os campos" });

  // validar o telefone
  let phoneValid = phone.length;
  let cpfValid = validarCpf(cpf);

  if (phoneValid === 11) {
    const parte1 = phone.slice(0, 7);
    const parte2 = phone.slice(7, 11);
    phoneValid = `${parte1}-${parte2}`;
  } else {
    return response
      .status(401)
      .json({ sucess: false, msg: "Insira um telefone válido" });
  }

  // validar cpf
  if (cpfValid === false)
    return response
      .status(401)
      .json({ success: false, msg: "CPF informado não é válido" });

  const userExists = await User.findOne({ cpf });

  if (userExists)
    return response
      .status(400)
      .json({ sucess: false, msg: "CPF já cadastrado" });

  const newUser = await User.create({
    name,
    lastname,
    phone: phoneValid,
    cpf,
  });

  try {
    const user = await newUser.save();
    response.status(200).json({ success: true, user });
  } catch (e) {
    return response.status(500).json(e);
  }
}

module.exports = { signin, singup };
