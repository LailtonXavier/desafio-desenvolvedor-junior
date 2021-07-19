import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import { Container } from '../../styles/GlobalStyles';

export default function Fotos({ match }) {
  const id = get(match, 'params.id', '');

  const dispatch = useDispatch();

  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Fotos[0].url', ''));

        setIsLoading(false);
      } catch {
        toast.error('Erro ao carregar imagem');
        setIsLoading(false);
        history.push('/');
      }
    }
    getData();
  }, [id]);

  // take photos
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', file);

    try {
      setIsLoading(true);

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      toast.success('Foto enviada com sucesso!');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error('foto');

      const { status } = get(err, 'response.status', '');
      toast.error('Erro ao enviar a foto');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="foto" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
