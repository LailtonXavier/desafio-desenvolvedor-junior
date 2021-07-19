import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { get } from 'lodash';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator'; // so valida String, converter
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';

import { Container } from '../../styles/GlobalStyles';
import { Form, H1, ProfilePicture } from './styled';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', '');

  const dispatch = useDispatch();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');

        setFoto(Foto);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) {
          errors.map((error) => toast.error(error));
          history.push('/');
        }
      }
    }
    getData();
  }, [id]);

  // validar Form
  const validarFormrs = () => {
    let formErros = false;

    if (nome.length < 3 || nome.length > 255) {
      formErros = true;
      toast.error('Nome invalido');
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErros = true;
      toast.error('Sobrenome invalido');
    }

    if (!isEmail(email)) {
      formErros = true;
      toast.error('Email esta invalido');
    }

    if (!isInt(String(idade))) {
      formErros = true;
      toast.error('Idade precisa ser numero inteiro');
    }

    if (!isFloat(String(altura))) {
      formErros = true;
      toast.error('Altura precisa ser numero flutuante');
    }

    if (!isFloat(String(peso))) {
      formErros = true;
      toast.error('Peso precisa ser numero Flutuante');
    }

    // eslint-disable-next-line no-useless-return
    if (formErros) return;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    validarFormrs();

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Alunos(a) editado com sucesso');
      } else {
        const { data } = await axios.post('/alunos/', {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado com sucesso');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.lenght > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido!');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <H1>{id ? 'Editar aluno' : 'Novo aluno'}</H1>

      {id && (
        <ProfilePicture>
          {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={180} />}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />

        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Seu sobrenome"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu E-mail"
        />

        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Sua idade"
        />

        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Seu peso"
        />

        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Sua altura"
        />

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
