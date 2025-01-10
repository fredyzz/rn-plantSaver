import { View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";

export default function ProfileScreen() {
  const toggleHasFinishedOnboarding = useUserStore(
    (state) => state.toggleHasFinishedOnboarding
  );

  const handlePress = () => {
    toggleHasFinishedOnboarding();
  };

  return (
    <View style={styles.container}>
      <Button title="Back to Onboarding" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
