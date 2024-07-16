import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

import { styles } from './SkillsStyles';

interface Skill {
  name: string;
  rating: number;
}

interface SkillsData {
  [category: string]: Skill[];
}

const skillsData: SkillsData = {
  Frameworks: [
    { name: 'React', rating: 4 },
    { name: 'React Native', rating: 4 },
    { name: 'Node.js', rating: 3.5 },
  ],
  Languages: [
    { name: 'HTML', rating: 4.5 },
    { name: 'CSS', rating: 4.5 },
    { name: 'JavaScript', rating: 4.5 },
  ],
  Design: [
    { name: 'Design UI', rating: 4 },
    { name: 'Design UX', rating: 4 },
    { name: 'Figma', rating: 4.5 },
  ],
};

export function Skills() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(skillsData).map((category) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          {skillsData[category].map((skill) => (
            <View key={skill.name} style={styles.skillContainer}>
              <Text style={styles.skillName}>{skill.name}</Text>
              <StarRating
                rating={skill.rating}
                maxStars={5}
                starSize={20}
                starStyle={styles.star}
                color='white'
                enableHalfStar={true}
                onChange={() => {}}
              />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
