import React from 'react';
import { FlatList } from 'react-native';
import ProjectCard from '../../components/Card/Card';

const projects = [
  { id: '1', name: 'Projeto Pands', description: 'Desenvolvi uma interface interativa no Figma, aplicando princípios de Design UX e UI. Usei técnicas como pesquisa de usuários e protótipos interativos para otimizar a usabilidade. A paleta de cores e o layout responsivo foram escolhidos para criar uma experiência visualmente atraente e centrada no usuário. ', image: require('../../../assets/Figma.png') },
];

export default function Projetos() {
  return (
    <FlatList
      data={projects}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProjectCard project={item} />}
    />
  );
}
