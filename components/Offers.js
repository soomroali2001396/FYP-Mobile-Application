import React from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Platform } from "react-native";

const theme = {
  background: "#F9F3EC",
  text: "#000",
  cardBackground: "#FFF",
  cardShadow: "#CCC",
  buttonBackground: "#6A4E36",
  buttonText: "#FFF",
 
};

export default function App() {
  const mockData = [
    {
      id: "1",
      title: "Wedding 2024",
      date: "22 Nov, 2024",
      image: "https://cdn-ganmh.nitrocdn.com/yAyKiBPVPMXKQMHztHQiJNHZvbaKhuGt/assets/images/optimized/rev-db8387a/biyahwedding.com/wp-content/uploads/2021/09/SHAR2453-scaled.webp",
    },
    {
      id: "2",
      title: "Henna Event 2024",
      date: "20 Nov, 2024",
      image: "https://images.prismic.io/devcms/9173527e-99b9-48bd-8e55-38bba07214b7_5%2Bcool%2Bmehendi%2Bpose.jpg?auto=compress,format",
    },
    {
      id: "3",
      title: "Business Meeting",
      date: "10 Nov, 2023",
      image: "https://www.iobm.edu.pk/assets/images/ORIC-MoU-Signing-Picture-Updated.jpg",
    },
    {
      id: "4",
      title: "Annual Dinner",
      date: "10 March, 2024",
      image: "https://media1.clevescene.com/clevescene/imager/the-23-best-restaurants-on-clevelands-east-side/u/zoom/38273009/zoma.jpg?cb=1648286618",
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: theme.text }]}>Special Offers</Text>
      </View>

      {/* Must See Section */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Must see</Text>
      <FlatList
        horizontal
        data={mockData.slice(0, 2)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert(`Clicked on ${item.title}`)}>
            <View style={[styles.card, { backgroundColor: theme.cardBackground }]}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <Text style={[styles.cardText, { color: theme.text }]}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* All Events Section */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>All events</Text>
      <FlatList
        data={mockData.slice(2)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert(`Clicked on ${item.title}`)}>
            <View style={[styles.listItem, { backgroundColor: theme.cardBackground }]}>
              <Image source={{ uri: item.image }} style={styles.listImage} />
              <View>
                <Text style={[styles.listTitle, { color: theme.text }]}>{item.title}</Text>
                <Text style={[styles.listDate, { color: theme.text }]}>{item.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Footer */}
      <View style={[styles.footer, { backgroundColor: theme.footerBackground }]}>
        <TouchableOpacity
          style={[styles.footerButton, { backgroundColor: theme.buttonBackground }]}
          onPress={() => alert("Sorry, No More Events Found!")}
        >
          <Text style={[styles.footerButtonText, { color: theme.buttonText }]}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  card: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginRight: 15,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 3, // Android shadow
      },
    }),
  },
  cardImage: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardText: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
    }),
  },
  listImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listDate: {
    fontSize: 12,
    color: "#666",
  },
  footer: {
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  footerButton: {
    padding: 10,
    borderRadius: 5,
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
