import { Text, View, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.SubtitleContainer}>
      <Text style={styles.Subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  Subtitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  SubtitleContainer: {
    borderColor: "black",
    borderBottomColor: "black",
    padding: 6,
    borderBottomWidth: 2,
    margin: 4,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
