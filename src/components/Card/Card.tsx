import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ImageSourcePropType } from 'react-native';

import { styles } from './CardStyles';

interface Project {
  name: string;
  description: string;
  image: ImageSourcePropType;
}

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [fullscreenVisible, setFullscreenVisible] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={toggleExpand}
        onLongPress={() => setFullscreenVisible(true)}
        accessible={true}
        accessibilityLabel={`View details for ${project.name}`}
        style={styles.touchable} // Adicionado
      >
        <Image source={project.image} style={styles.image} />
        <Text style={styles.title}>{project.name}</Text>
      </TouchableOpacity>
      {expanded && <Text style={styles.description}>{project.description}</Text>}

      <Modal visible={fullscreenVisible} transparent={true}>
        <View style={styles.fullscreenContainer}>
          <TouchableOpacity onPress={() => setFullscreenVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeText}>x</Text>
          </TouchableOpacity>
          <Image source={project.image} style={styles.fullscreenImage} />
        </View>
      </Modal>
    </View>
  );
};

export default Card;
