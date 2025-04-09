import React, { useState } from 'react'
import axios from 'axios'

const CadastroUsuario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    image: '',
    email: '',
    senha: '',
    whatsapp: '',
    telefone: '',
    cpf: '',
    logo: '',
    descricao: '',
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ddd: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const buscarCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`)
      const data = response.data
      setFormData((prev) => ({
        ...prev,
        logradouro: data.logradouro || '',
        complemento: data.complemento || '',
        bairro: data.bairro || '',
        localidade: data.localidade || '',
        uf: data.uf || '',
        ddd: data.ddd || ''
      }))
    } catch (error) {
      alert('Erro ao buscar o CEP.')
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados enviados:', formData)
    // Enviar via API backend, ex: axios.post('/api/users', formData)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold text-center">Cadastro de Usuário</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="image" placeholder="URL da imagem" value={formData.image} onChange={handleChange} className="p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded" />
          <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="whatsapp" placeholder="WhatsApp" value={formData.whatsapp} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="logo" placeholder="URL do logo" value={formData.logo} onChange={handleChange} className="p-2 border rounded" />
        </div>

        <textarea name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} className="w-full p-2 border rounded h-24" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <input type="text" name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} className="p-2 border rounded" />
          <button type="button" onClick={buscarCep} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Buscar CEP
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="logradouro" placeholder="Logradouro" value={formData.logradouro} readOnly className="p-2 border rounded bg-gray-100" />
          <input type="text" name="complemento" placeholder="Complemento" value={formData.complemento} readOnly className="p-2 border rounded bg-gray-100" />
          <input type="text" name="bairro" placeholder="Bairro" value={formData.bairro} readOnly className="p-2 border rounded bg-gray-100" />
          <input type="text" name="localidade" placeholder="Cidade" value={formData.localidade} readOnly className="p-2 border rounded bg-gray-100" />
          <input type="text" name="uf" placeholder="Estado" value={formData.uf} readOnly className="p-2 border rounded bg-gray-100" />
          <input type="text" name="ddd" placeholder="DDD" value={formData.ddd} readOnly className="p-2 border rounded bg-gray-100" />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Cadastrar Usuário
        </button>
      </form>
    </div>
  )
}

export default CadastroUsuario
