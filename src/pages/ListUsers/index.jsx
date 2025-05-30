import { useEffect, useState } from 'react';
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'


import { Button } from "../../components/Button/styles";

import TopBackground from "../../components/TopBackground";
import Trash from '../../assets/trash.svg'

import { 
    Container,
    Title, 
    ContainerUsers, 
    CardUsers, 
    TrashIcon, 
    AvatarUser } 
    from "./style"

function ListUsers() {
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter ( user => user.id !== id)

        setUsers(updatedUsers)
    }


    // TODA VEZ que a tela carrega, o useEffect é chamado
    // TODA VEZ que uma determinada variavel MUDA de valor, ele é chamado.

    return (
        <div>
            <Container>

                <TopBackground />
                <Title>Lista de usuários</Title>

                <ContainerUsers>
                    {users.map((user) => (

                        <CardUsers key={user.id}>
                            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                            <div>
                                <h3>{user.name}</h3>
                                <p>{user.age}</p>
                                <p>{user.email}</p>
                            </div>
                            <TrashIcon src={Trash} alt='icone-lixo' onClick = {() => deleteUsers(user.id)}/>
                        </CardUsers>
                    ))}

                </ContainerUsers>
                <Button type='button'onClick={() => navigate('/Home')}>Voltar</Button>
            </Container>
        </div>
    )
}

export default ListUsers