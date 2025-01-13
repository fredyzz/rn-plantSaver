import { Text, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantSaverButton } from "@/components/plantSaverButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { PlantSaverImage } from "@/components/plantSaverImage";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasFinishedOnboarding = useUserStore(
    (state) => state.toggleHasFinishedOnboarding
  );

  const handlePress = () => {
    toggleHasFinishedOnboarding();
    router.replace("/");
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Text style={styles.text}>Plant Saver</Text>
      <Text style={styles.subtext}>
        Save your plants, keep them healthy and happy
      </Text>
      <PlantSaverImage />
      <PlantSaverButton title="Finish Onboarding" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    paddingHorizontal: 18,
  },
  text: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 24,
    marginBottom: 24,
    marginTop: 12,
    color: theme.colorWhite,
    textAlign: "center",
  },
});
