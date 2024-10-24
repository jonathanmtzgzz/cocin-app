import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'; // Asegúrate de importar ScrollView
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pantalla principal donde se muestran los platillos
function HomeScreen({ navigation }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);

  const toggleFavorite = (mealId) => {
    if (favorites.includes(mealId)) {
      setFavorites(favorites.filter((id) => id !== mealId));
    } else {
      setFavorites([...favorites, mealId]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.mealContainer}
              onPress={() => navigation.navigate('MealDetails', { mealId: item.idMeal })}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.mealImage} />
              <View style={styles.mealInfo}>
                <Text style={styles.mealName}>{item.strMeal}</Text>
                <FontAwesome
                  name={favorites.includes(item.idMeal) ? 'heart' : 'heart-o'}
                  size={24}
                  color="red"
                  onPress={() => toggleFavorite(item.idMeal)}
                />
              </View>
              <Text>{item.strCategory} - {item.strArea}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

// Pantalla de detalles del platillo
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
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.mealImageLarge} />
      <Text style={styles.mealName}>{meal.strMeal}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <FlatList
        data={getIngredients()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.ingredient}>{item.name} - {item.measure}</Text>
        )}
      />
      <Text style={styles.subtitle}>Instrucciones:</Text>
      <Text style={styles.instructions}>{meal.strInstructions}</Text>
    </ScrollView>
  );
}

// Configuración de la navegación
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MealDetails" component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  mealContainer: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  mealInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mealImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  mealImageLarge: {
    width: '100%',
    height: 300,
    borderRadius: 10,
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
