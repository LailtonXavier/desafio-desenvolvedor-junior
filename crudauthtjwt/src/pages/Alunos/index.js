import React, { useEffect, useState } from 'react';
import {
  FaEdit,
  FaExclamationTriangle,
  FaUserCircle,
  FaWindowClose,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, Names, NovoAluno, ProfilePicture } from './styled';
import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');

      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  // DELETE

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);

      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);

      setIsLoading(false);
    } catch (err) {
      const erros = get(err, 'response.data.errors', []);
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Voce precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }

      erros.map((error) => toast.error(error));
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="photos" />
              ) : (
                <FaUserCircle size={150} />
              )}
            </ProfilePicture>

            <Names>
              <span>{aluno.nome}</span>
              <span>{aluno.email}</span>

              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit size={16} />
              </Link>
              <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} />
              </Link>
              <FaExclamationTriangle
                size={16}
                display="none"
                cursor="pointer"
                color="red"
                onClick={(e) => handleDelete(e, aluno.id, index)}
              />
            </Names>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
