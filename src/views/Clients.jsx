import React, { useState } from 'react';
import '../style/Clients.css';

function Clients() {
    const [filteredClients, setFilteredClients] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterLastName, setFilterLastName] = useState('');
    const [filterCPF, setFilterCPF] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [newUserLastName, setNewUserLastName] = useState('');
    const [newUserCPF, setNewUserCPF] = useState('');
    const [newUserStatus, setNewUserStatus] = useState('ativo');
    const [newUserDate, setNewUserDate] = useState('');

    // Função para formatar CPF
    const formatCPF = (value) => {
        // Remove todos os caracteres não numéricos
        const onlyNums = value.replace(/[^\d]/g, '');

        // Adiciona os pontos e o traço conforme necessário
        if (onlyNums.length <= 3) {
            return onlyNums;
        } else if (onlyNums.length <= 6) {
            return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3)}`;
        } else if (onlyNums.length <= 9) {
            return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6)}`;
        } else {
            return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}-${onlyNums.slice(9, 11)}`;
        }
    };

    // Função para aplicar filtros
    const applyFilters = () => {
        const filtered = clients.filter(client => {
            // Filtro por nome
            const nameMatch = client.name.toLowerCase().includes(filterName.toLowerCase());
            // Filtro por sobrenome
            const lastNameMatch = client.lastName.toLowerCase().includes(filterLastName.toLowerCase());
            // Filtro por CPF
            const formattedFilterCPF = formatCPF(filterCPF);
            const cpfMatch = formattedFilterCPF === '' || client.cpf.includes(filterCPF.replace(/[^\d]/g, ''));
            // Filtro por status
            const statusMatch = filterStatus === '' || client.status === filterStatus;
            // Filtro por data de cadastro
            const dateMatch = client.date.includes(filterDate);
            return nameMatch && lastNameMatch && cpfMatch && statusMatch && dateMatch;
        });
        setFilteredClients(filtered);
    };

    // Função para limpar filtros
    const clearFilters = () => {
        setFilterName('');
        setFilterLastName('');
        setFilterCPF('');
        setFilterStatus('');
        setFilterDate('');
        setFilteredClients(clients); // Resetar para lista completa
    };

    // Ordenação
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    // Função para ordenar clientes
    const sortClients = (field) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }

        const sorted = [...filteredClients].sort((a, b) => {
            const aValue = typeof a[field] === 'string' ? a[field].toLowerCase() : a[field];
            const bValue = typeof b[field] === 'string' ? b[field].toLowerCase() : b[field];

            if (aValue < bValue) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setFilteredClients(sorted);
    };

    // Carregamento inicial dos clientes (simulado)
    const clients = [
        { id: 1, name: 'Cliente A', lastName: 'Sobrenome A', cpf: '111.111.111-11', status: 'ativo', date: '2022-03-25' },
        { id: 2, name: 'Cliente B', lastName: 'Sobrenome B', cpf: '22222222222', status: 'inativo', date: '2022-03-26' },
        { id: 3, name: 'Cliente C', lastName: 'Sobrenome C', cpf: '33333333333', status: 'pendente', date: '2022-03-27' }
    ];

    // Definir clientes filtrados inicialmente
    useState(() => {
        setFilteredClients(clients);
    }, []);

    // Função para adicionar novo usuário
    const addNewUser = () => {
        setShowModal(true); // Exibir o modal ao clicar em "Adicionar Novo Usuário"
        const newUser = {
            id: clients.length + 1,
            name: newUserName,
            lastName: newUserLastName,
            cpf: newUserCPF,
            status: newUserStatus,
            date: newUserDate
        };

        setFilteredClients([...filteredClients, newUser]);
        // setShowModal(false); // Fechar o modal após adicionar o novo usuário
    };
// Função para atualizar o estado do nome do novo usuário
    const handleNewUserNameChange = (e) => {
        setNewUserName(e.target.value);
    };

// Função para atualizar o estado do sobrenome do novo usuário
    const handleNewUserLastNameChange = (e) => {
        setNewUserLastName(e.target.value);
    };

// Função para atualizar o estado do CPF do novo usuário
    const handleNewUserCPFChange = (e) => {
        setNewUserCPF(e.target.value);
    };

// Função para atualizar o estado do status do novo usuário
    const handleNewUserStatusChange = (e) => {
        setNewUserStatus(e.target.value);
    };

// Função para atualizar o estado da data do novo usuário
    const handleNewUserDateChange = (e) => {
        setNewUserDate(e.target.value);
    };

    // Função para excluir usuário
    const deleteUser = (id) => {
        const updatedClients = filteredClients.filter(client => client.id !== id);
        setFilteredClients(updatedClients);
    };

    // Função para editar usuário (a ser implementada)
    const editUser = (id) => {
        // Adicione aqui a lógica para editar um usuário
        console.log(`Editar usuário com ID ${id}`);
    };

    return (
        <div>
            <div className="roundups-container">
                <h1 className="roundups-title">Clientes</h1>
                <div className="filters">
                    <div className="filter">
                        <label htmlFor="clientName" className="filter-label">Nome do cliente:</label>
                        <input
                            type="text"
                            id="clientName"
                            name="clientName"
                            className="input-field"
                            placeholder="Nome"
                            value={filterName}
                            onChange={(e) => setFilterName(e.target.value)}
                        />
                    </div>
                    <div className="filter">
                        <label htmlFor="clientLastName" className="filter-label">Sobrenome do cliente:</label>
                        <input
                            type="text"
                            id="clientLastName"
                            name="clientLastName"
                            className="input-field"
                            placeholder="Sobrenome"
                            value={filterLastName}
                            onChange={(e) => setFilterLastName(e.target.value)}
                        />
                    </div>
                    <div className="filter">
                        <label htmlFor="clientCPF" className="filter-label">CPF do cliente:</label>
                        <input
                            type="text"
                            id="clientCPF"
                            name="clientCPF"
                            className="input-field"
                            placeholder="CPF"
                            value={formatCPF(filterCPF)} // Aplicando a formatação
                            onChange={(e) => setFilterCPF(e.target.value)}
                        />
                    </div>
                    <div className="filter">
                        <label htmlFor="subscriptionStatus" className="filter-label">Status Assinatura:</label>
                        <select
                            id="subscriptionStatus"
                            name="subscriptionStatus"
                            className="select-field"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="">Todos</option>
                            <option value="ativo">Ativo</option>
                            <option value="inativo">Inativo</option>
                            <option value="pendente">Pendente</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="clientDate" className="filter-label">Data de cadastro:</label>
                        <input
                            type="date"
                            id="clientDate"
                            name="clientDate"
                            className="input-field"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                        />
                    </div>
                    <button className="apply-button" onClick={applyFilters}>Aplicar Filtros</button>
                    <button className="clear-button" onClick={clearFilters}>Limpar Filtros</button>
                    <button className="apply-button" onClick={addNewUser}>Adicionar Novo Usuário</button>
                </div>
            </div>
            <div className="table-container">
                <table className="data-table">
                    <thead>
                    <tr>
                        <th onClick={() => sortClients('id')}>ID</th>
                        <th onClick={() => sortClients('name')}>Nome</th>
                        <th onClick={() => sortClients('lastName')}>Sobrenome</th>
                        <th onClick={() => sortClients('cpf')}>CPF</th>
                        <th onClick={() => sortClients('status')}>Status Assinatura</th>
                        <th onClick={() => sortClients('date')}>Data de Cadastro</th>
                        <th>Ações</th>
                        {/* Cabeçalho da coluna de ações */}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredClients.map(client => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.lastName}</td>
                            <td>{client.cpf}</td>
                            <td>{client.status}</td>
                            <td>{client.date}</td>
                            <td>
                                <button className="edit-button" onClick={() => editUser(client.id)}>Editar</button>
                                {/* Botão de editar */}
                                <button className="delete-button" onClick={() => deleteUser(client.id)}>Excluir</button>
                                {/* Botão de excluir */}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {
                showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                            <h2>Adicionar Novo Usuário</h2>
                    <div className="form-group">
                        <label htmlFor="newUserName">Nome:</label>
                        <input type="text" id="newUserName" value={newUserName} onChange={handleNewUserNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newUserLastName">Sobrenome:</label>
                        <input type="text" id="newUserLastName" value={newUserLastName}
                               onChange={handleNewUserLastNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newUserCPF">CPF:</label>
                        <input
                            type="text"
                            id="newUserCPF"
                            value={formatCPF(newUserCPF)}
                            onChange={(e) => setNewUserCPF(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newUserStatus">Status:</label>
                        <select id="newUserStatus" value={newUserStatus} onChange={handleNewUserStatusChange}>
                            <option value="ativo">Ativo</option>
                            <option value="inativo">Inativo</option>
                                <option value="pendente">Pendente</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="newUserDate">Data:</label>
                            <input type="date" id="newUserDate" value={newUserDate} onChange={handleNewUserDateChange}/>
                        </div>
                        <button onClick={addNewUser}>Adicionar Usuário</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Clients;
