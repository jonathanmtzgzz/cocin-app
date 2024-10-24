import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

function MealDetails({ route }) {
  const { mealId } = route.params;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMealDetails();
  }, [mealId]);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ name: ingredient, measure: measure });
      }
    }
    return ingredients;
  };

  if (loading || !meal) {
    return <Text>Cargando detalles...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.mealImageLarge} />
      <Text style={styles.mealName}>{meal.strMeal}</Text>
      <Text style={styles.subtitle}>Ingredients:</Text>
      <FlatList
        data={getIngredients()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.ingredient}>{item.name} - {item.measure}</Text>
        )}
        ListHeaderComponent={<Text style={styles.subtitle}>Instructions:</Text>}
        ListFooterComponent={<Text style={styles.instructions}>{meal.strInstructions}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  mealImageLarge: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  mealName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5,
  },
  instructions: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default MealDetails;
